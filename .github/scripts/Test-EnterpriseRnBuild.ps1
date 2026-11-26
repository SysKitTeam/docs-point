<#
.SYNOPSIS
    Checks that Enterprise Release Notes link the build that was released to Azure Marketplace.

.DESCRIPTION
    The released Enterprise build is the latest successful "Marketplace Deploy" stage deployment of
    the Azure DevOps release pipeline. Hotfixes can deploy a newer build after the note is written.

    For each Enterprise Release Note, compares the "Build number" text and the "Need this specific
    version?" deploy link with that build, and reports:
      - OK          : note matches the build released to Marketplace
      - Outdated    : Marketplace has a different (newer) build of this version
      - NotReleased : this version has no successful Marketplace Deploy yet
      - Mismatch    : "Build number" text and the deploy link disagree
      - Missing     : no deploy link, or the linked PointUpdateTemplate.json is not in the download storage

    Exits with code 1 when any note is not OK, unless -WarnOnly is set.

    The Azure DevOps release deployments endpoint is configured through the
    AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL environment variable. In CI, store it as a GitHub secret
    to keep internal Azure DevOps identifiers out of public workflow logs.

    Azure DevOps authentication, in order:
      1. AZURE_DEVOPS_TOKEN environment variable — a PAT with the Release (Read) scope
      2. Azure CLI (az login) — for local runs

    Used by .github/workflows/enterprise-rn-build-check.yml and by the create-ent-rn Copilot skill.

.PARAMETER Path
    One or more Enterprise Release Note files.

.PARAMETER BaseRef
    Git ref to diff against (for example origin/main). Checks only the Enterprise Release Notes
    added or modified since that ref.

.PARAMETER Latest
    Checks the N most recent Enterprise Release Notes in the repository.

.PARAMETER SummaryPath
    Appends a Markdown result table to this file (for example $env:GITHUB_STEP_SUMMARY).

.PARAMETER WarnOnly
    Reports problems but always exits with code 0.

.EXAMPLE
    ./.github/scripts/Test-EnterpriseRnBuild.ps1 -BaseRef origin/main

.EXAMPLE
    ./.github/scripts/Test-EnterpriseRnBuild.ps1 -Latest 5
#>
[CmdletBinding(DefaultParameterSetName = 'Path')]
param(
    [Parameter(ParameterSetName = 'Path', Mandatory)]
    [string[]]$Path,

    [Parameter(ParameterSetName = 'BaseRef', Mandatory)]
    [string]$BaseRef,

    [Parameter(ParameterSetName = 'Latest', Mandatory)]
    [int]$Latest,

    [string]$SummaryPath,

    [switch]$WarnOnly
)

$ErrorActionPreference = 'Stop'

$azureDevOpsResourceId = '499b84ac-1321-427f-aa17-267ca6975798'
$maxDeploymentsToScan = 500

$storageBase = 'https://syskitdownloadsstorage.blob.core.windows.net/point'
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '../..')
$rnPattern = '^docs/releases/enterprise/[^/]+/point-\d+-\d+-\d+-release-note\.md$'

function Get-AzureDevOpsHeaders {
    if ($env:AZURE_DEVOPS_TOKEN) {
        $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$($env:AZURE_DEVOPS_TOKEN)"))
        return @{ Authorization = "Basic $basic" }
    }
    $token = az account get-access-token --resource $azureDevOpsResourceId --query accessToken -o tsv 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $token) {
        throw 'No Azure DevOps credentials. Set AZURE_DEVOPS_TOKEN to a PAT with Release (Read) scope, or run az login.'
    }
    return @{ Authorization = "Bearer $token" }
}

# Latest successful Marketplace Deploy per product version, e.g. '2026.4.167' -> build 42.
function Get-MarketplaceReleases {
    param([string[]]$Versions)

    if (-not $env:AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL) {
        throw 'Missing AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL. Set it to the Azure DevOps Marketplace Deployments API URL.'
    }
    $releaseDeploymentsUri = [uri]$env:AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL
    if (-not $releaseDeploymentsUri.IsAbsoluteUri -or $releaseDeploymentsUri.Scheme -ne 'https' -or
        $releaseDeploymentsUri.Host -ne 'vsrm.dev.azure.com' -or
        $releaseDeploymentsUri.AbsolutePath -notmatch '/_apis/release/deployments$') {
        throw 'AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL must be an HTTPS Azure DevOps release deployments API URL.'
    }

    $headers = Get-AzureDevOpsHeaders
    $found = @{}
    $continuation = $null
    $scanned = 0
    do {
        $uri = $releaseDeploymentsUri.AbsoluteUri
        if ($continuation) {
            $uri += "&continuationToken=$([uri]::EscapeDataString($continuation))"
        }
        $response = Invoke-WebRequest -Uri $uri -Headers $headers -UseBasicParsing -TimeoutSec 60
        if ($response.Headers['Content-Type'] -notmatch 'application/json') {
            throw 'Azure DevOps rejected the request (sign-in page returned). Check AZURE_DEVOPS_TOKEN or az login, and verify AZURE_DEVOPS_RELEASE_DEPLOYMENTS_URL.'
        }
        $continuation = $response.Headers['x-ms-continuationtoken'] | Select-Object -First 1
        $deployments = @(($response.Content | ConvertFrom-Json).value)
        $scanned += $deployments.Count

        foreach ($deployment in $deployments) {
            if ($deployment.release.name -notmatch '^(\d+\.\d+\.\d+)\.(\d+)$') { continue }
            $version = $Matches[1]
            if ($Versions -contains $version -and -not $found.ContainsKey($version)) {
                $found[$version] = [pscustomobject]@{
                    Build       = [int]$Matches[2]
                    CompletedOn = ([datetime]$deployment.completedOn).ToUniversalTime()
                    ReleaseName = $deployment.release.name
                }
            }
        }
    } while ($continuation -and $deployments.Count -gt 0 -and $found.Count -lt $Versions.Count -and $scanned -lt $maxDeploymentsToScan)

    $found
}

function Test-PackageExists {
    param([string]$Folder)

    try {
        Invoke-WebRequest -Uri "$storageBase/deployment-packages/$Folder/PointUpdateTemplate.json" -Method Head -UseBasicParsing -TimeoutSec 60 | Out-Null
        $true
    }
    catch { $false }
}

switch ($PSCmdlet.ParameterSetName) {
    'BaseRef' {
        $changed = git -C $repoRoot diff --name-only --diff-filter=AMR "$BaseRef...HEAD"
        if ($LASTEXITCODE -ne 0) { throw "git diff against '$BaseRef' failed." }
        $Path = @($changed | Where-Object { $_ -match $rnPattern } | ForEach-Object { Join-Path $repoRoot $_ })
    }
    'Latest' {
        $Path = @(Get-ChildItem -Path (Join-Path $repoRoot 'docs/releases/enterprise') -Recurse -Filter '*-release-note.md' |
            Where-Object { $_.Name -match '^point-\d+-\d+-\d+-release-note\.md$' } |
            Sort-Object { $parts = $_.BaseName -split '-'; [version]"$($parts[1]).$($parts[2]).$($parts[3])" } -Descending |
            Select-Object -First $Latest).FullName
    }
}

if (-not $Path) {
    Write-Host 'No Enterprise Release Notes to check.'
    if ($SummaryPath) { "### Enterprise RN build check`n`nNo Enterprise Release Notes changed." | Add-Content -Path $SummaryPath }
    exit 0
}

$notes = foreach ($file in $Path) {
    $text = Get-Content -Path $file -Raw
    $stated = [regex]::Match($text, '\*\*Build number:\*\*\s*(\d+)')
    $link = [regex]::Match($text, 'deployment-packages%2F(v(\d+)-(\d+)-(\d+)-([^%/)\s]+))%2FPointUpdateTemplate\.json')
    [pscustomobject]@{
        File        = [System.IO.Path]::GetRelativePath($repoRoot, (Resolve-Path $file)) -replace '\\', '/'
        StatedBuild = if ($stated.Success) { [int]$stated.Groups[1].Value } else { $null }
        HasLink     = $link.Success
        Folder      = if ($link.Success) { $link.Groups[1].Value } else { $null }
        Version     = if ($link.Success) { "$($link.Groups[2].Value).$($link.Groups[3].Value).$($link.Groups[4].Value)" } else { $null }
        LinkedBuild = if ($link.Success -and $link.Groups[5].Value -match '^\d+$') { [int]$link.Groups[5].Value } else { $null }
    }
}

$versions = @($notes | Where-Object Version | Select-Object -ExpandProperty Version -Unique)
$marketplace = if ($versions) { Get-MarketplaceReleases -Versions $versions } else { @{} }

$results = foreach ($note in $notes) {
    $released = if ($note.Version) { $marketplace[$note.Version] } else { $null }
    $result = [ordered]@{
        File             = $note.File
        Version          = $note.Version
        LinkedBuild      = $note.LinkedBuild
        StatedBuild      = $note.StatedBuild
        MarketplaceBuild = if ($released) { $released.Build } else { $null }
        MarketplaceAt    = if ($released) { $released.CompletedOn.ToString('yyyy-MM-dd HH:mm') + ' UTC' } else { $null }
        Status           = $null
        Message          = $null
    }

    if (-not $note.HasLink) {
        $result.Status = 'Missing'
        $result.Message = 'No deployment-packages deploy link found.'
    }
    elseif ($null -ne $note.StatedBuild -and $note.StatedBuild -ne $note.LinkedBuild) {
        $result.Status = 'Mismatch'
        $result.Message = "'Build number: $($note.StatedBuild)' does not match the deploy link ($($note.Folder))."
    }
    elseif (-not $released) {
        $result.Status = 'NotReleased'
        $result.Message = "No successful Marketplace Deploy for $($note.Version) yet. Publish after the Marketplace Deploy stage succeeds."
    }
    elseif ($released.Build -ne $note.LinkedBuild) {
        $result.Status = 'Outdated'
        $result.Message = "Marketplace Deploy released $($released.ReleaseName) on $($result.MarketplaceAt). Update **Build number** and the deploy link to $($released.Build)."
    }
    elseif (-not (Test-PackageExists -Folder $note.Folder)) {
        $result.Status = 'Missing'
        $result.Message = "No package at deployment-packages/$($note.Folder)/PointUpdateTemplate.json. The DC stage uploads it after Marketplace Deploy — wait for DC to finish, or fix the link."
    }
    else {
        $result.Status = 'OK'
        $result.Message = "Matches Marketplace Deploy $($released.ReleaseName)."
    }

    [pscustomobject]$result
}

$results
$failed = @($results | Where-Object Status -ne 'OK')

if ($env:GITHUB_ACTIONS -eq 'true') {
    $level = if ($WarnOnly) { 'warning' } else { 'error' }
    foreach ($r in $failed) { Write-Host "::$level file=$($r.File)::$($r.Status): $($r.Message)" }
}

if ($SummaryPath) {
    $lines = @(
        '### Enterprise RN build check', '',
        'Source: latest successful **Marketplace Deploy** stage of the release pipeline.', '',
        '| File | Version | Linked build | Marketplace build | Status | Details |',
        '|---|---|---|---|---|---|'
    )
    foreach ($r in $results) {
        $icon = if ($r.Status -eq 'OK') { '✅' } else { '❌' }
        $marketplaceCell = if ($r.MarketplaceBuild) { "$($r.MarketplaceBuild) ($($r.MarketplaceAt))" } else { '—' }
        $lines += "| ``$($r.File)`` | $($r.Version) | $($r.LinkedBuild) | $marketplaceCell | $icon $($r.Status) | $($r.Message) |"
    }
    if ($failed -and $WarnOnly) { $lines += '', '> Reporting only, not blocking.' }
    $lines -join "`n" | Add-Content -Path $SummaryPath
}

if ($failed -and -not $WarnOnly) { exit 1 }
exit 0
