$PathAdminConsole="C:\Program Files (x86)\ConfigMgr Console\bin\i386"
$CurrentLocation=Get-Location
$compress = @{
LiteralPath= "$PathAdminConsole\CmRcViewer.exe", "$PathAdminConsole\RdpCoreSccm.dll", "$PathAdminConsole\00000409\", "$CurrentLocation\Uninstall"
CompressionLevel = "Fastest"
DestinationPath = "$CurrentLocation\CmRcViewer.zip"
}
Compress-Archive @compress
