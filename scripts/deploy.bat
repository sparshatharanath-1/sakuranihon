@echo off
echo Deploying application...

cd /d %WORKSPACE%\src\app
start "" cmd /c "python -m http.server 8080"

echo Deployment complete
