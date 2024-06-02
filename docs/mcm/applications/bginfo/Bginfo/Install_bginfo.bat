@echo off
if not exist "%~1" md "%~1"
xcopy /y /c "%~dp0Bginfo\*.*" "%~1"
schtasks.exe /create /tn "BginfoStart" /xml "%~dp0BginfoStart.xml" /f
