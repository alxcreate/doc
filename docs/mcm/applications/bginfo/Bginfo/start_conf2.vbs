Option Explicit
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")

Dim currentValue
currentValue = WshShell.RegRead("HKCU\Control Panel\Colors\Background")

Dim rgbValues
rgbValues = Split(currentValue, " ")

If rgbValues(0) >= 200 And rgbValues(1) >= 200 And rgbValues(2) >= 200 Then
WshShell.RegWrite "HKCU\Control Panel\Colors\Background", "81 92 107", "REG_SZ"
End If

WshShell.Run """C:\Program Files\BGInfo\BGInfo64.exe"" ""C:\Program Files\BGInfo\conf-workstation.bgi"" /timer:0 /NOLICPROMPT", 0, False

Set WshShell = Nothing
