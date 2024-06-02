Stop-Process -name "CmRcViewer" -Force -ErrorAction Ignore
#Wait for process stopping
Start-Sleep -Seconds 1

#Define OS architecture
if([Environment]::Is64BitOperatingSystem) {
#If x64
$ProgFiles = ${env:ProgramFiles(x86)}
$Reg = "HKLM:\SOFTWARE\WOW6432Node"
} else {
#If x32
$ProgFiles = ${env:ProgramFiles}
$Reg = "HKLM:\SOFTWARE"
}
$RegCmRcViewer = "$Reg\Microsoft\Windows\CurrentVersion\Uninstall\CmRcViewer"

#Remove files
Remove-Item $ProgFiles"\CmRcViewer" -Recurse -Force
#Remove items for manual uninstall
Remove-Item -Path "$RegCmRcViewer"
#Remove shortcuts
Remove-Item -Path "C:\Users\Public\Desktop\CmRcViewer.lnk" -ErrorAction Ignore
Remove-Item -Path "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\CmRcViewer.lnk" -ErrorAction Ignore
