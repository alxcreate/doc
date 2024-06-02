# CM Remote Tool

## Files

Installer [`install.ps1`](install.ps1)

Uninstaller [`Uninstall\uninstall.ps1`](Uninstall/uninstall.ps1)

- For create package need run script [`Make_CmRcViewer.ps1`](Make_CmRcViewer.ps1)
- It will create archive CmRcViewer.zip. It should be moved to `\\server\CmRcViewer\5.0.9049.1000` (version is specified as the version of the file `CmRcViewer.exe`)
- Script `install.ps1` starts the installation. It should be copied to `\\server\CmRcViewer\5.0.9049.1000` after changing the version in the line:

```powershell
Expand-Archive "\\server\CmRcViewer\5.0.9049.1000\CmRcViewer.zip" "$ProgFiles\CmRcViewer"
```

- Add app in SCCM

For access to remote computer need open ports:

- TCP 135
- UDP 2702
- TCP 2702
- UDP 2701
- TCP 2701

Link for remote access `"C:\Program Files (x86)\CmRcViewer\CmRcViewer.exe" HOSTNAME`
