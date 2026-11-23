@echo off
echo Starting Celeste Website local server...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
