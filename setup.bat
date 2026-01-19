@echo off
REM MFZ GYM - React Project Setup Script (Windows)
REM This script automates the setup of the React project

echo.
echo ================================================================
echo   MFZ GYM - React Project Setup
echo ================================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Please download and install from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.
echo npm version:
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
echo.
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ================================================================
    echo   Setup Complete! Next Steps:
    echo ================================================================
    echo.
    echo 1. Start development server:
    echo    npm start
    echo.
    echo 2. Build for production:
    echo    npm run build
    echo.
    echo 3. Update .env file with EmailJS credentials
    echo.
    echo 4. Check the documentation files:
    echo    - SETUP-GUIDE.md (Installation & deployment)
    echo    - README-REACT.md (Project overview)
    echo    - MIGRATION-GUIDE.md (Migration details)
    echo.
    echo ================================================================
) else (
    echo.
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

pause
