# PowerShell script to convert GitBook hints to Docusaurus admonitions
Write-Host "Converting GitBook hints to Docusaurus admonitions..."

# Get all markdown files that contain hint blocks
$files = Get-ChildItem -Path "docs" -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '{% hint.*?%}') {
        $_.FullName
    }
}

Write-Host "Found $($files.Count) files with GitBook hints"

# Process each file
foreach ($file in $files) {
    Write-Host "Processing: $($file -replace [regex]::Escape($PWD), '.')"
    
    $content = Get-Content $file -Raw
    
    # Convert hint blocks to admonitions
    # Pattern: {% hint style="type" %} ... {% endhint %}
    
    # Map GitBook styles to Docusaurus admonition types
    $content = $content -replace '{% hint style="info" %}', ':::info'
    $content = $content -replace '{% hint style="information" %}', ':::info'
    $content = $content -replace '{% hint style="warning" %}', ':::warning'
    $content = $content -replace '{% hint style="success" %}', ':::tip'
    $content = $content -replace '{% hint style="danger" %}', ':::danger'
    $content = $content -replace '{% hint style="caution" %}', ':::caution'
    
    # Handle special cases with content on same line
    $content = $content -replace '{% hint style="warning" %} Please note!', ':::warning Please note!'
    
    # Replace closing tags
    $content = $content -replace '{% endhint %}', ':::'
    
    # Handle multi-line closing tags with content
    $content = $content -replace 'By default, Exchange logs are not collected; at least one Exchange activity must be selected for Syskit Point to collect and store Exchange log data\. {% endhint %}', 'By default, Exchange logs are not collected; at least one Exchange activity must be selected for Syskit Point to collect and store Exchange log data.`n:::'
    
    # Write the updated content back to the file
    Set-Content -Path $file -Value $content -NoNewline
}

Write-Host "Conversion completed!"
