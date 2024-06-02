# Notes

## Показать GUID установленных приложений

```bat
wmic product get Name,IdentifyingNumber
```

## Проверка установленных приложений в реестре

### Machine x64

`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall`

### Machine x86

`HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall`

### User x64

`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall`

### User x86

`HKCU\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall`
