# Fix mark tags in syskit-point-api.md
$filePath = "docs\integrations\syskit-point-api.md"
$content = Get-Content -Path $filePath -Raw

# Replace all mark style attributes
$content = $content -replace '<mark style="color:([^"]+);">', '<mark style={{color: ''$1''}}>'

# Save the updated content
Set-Content -Path $filePath -Value $content -NoNewline

Write-Host "Fixed mark tags in $filePath"