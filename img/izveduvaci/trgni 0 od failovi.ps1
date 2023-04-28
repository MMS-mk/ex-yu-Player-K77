$dirPath = "D:\TMP\img"
$files = Get-ChildItem -Path $dirPath
# Loop
foreach ($file in $files) {
    $newName = $file.Name.TrimStart('0')
    if ($newName -ne $file.Name) {
        Rename-Item -Path $file.FullName -NewName $newName
        Write-Host "Renamed $($file.Name) to $($newName)"
    }
}
