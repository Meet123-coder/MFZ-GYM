#!/bin/bash

# MFZ GYM - React Project Setup Script
# This script automates the setup of the React project

echo "═══════════════════════════════════════════════════════════════════"
echo "  🏋️  MFZ GYM - React Project Setup  🏋️"
echo "═══════════════════════════════════════════════════════════════════"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
    echo "  🚀 Next Steps:"
    echo "═══════════════════════════════════════════════════════════════════"
    echo ""
    echo "1. Start development server:"
    echo "   npm start"
    echo ""
    echo "2. Build for production:"
    echo "   npm build"
    echo ""
    echo "3. Check documentation:"
    echo "   - SETUP-GUIDE.md          (Installation & deployment)"
    echo "   - README-REACT.md         (Project overview)"
    echo "   - MIGRATION-GUIDE.md      (Before/after comparison)"
    echo ""
    echo "4. Update .env with your EmailJS credentials"
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
