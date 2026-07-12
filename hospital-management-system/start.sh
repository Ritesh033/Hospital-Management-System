#!/bin/bash

echo "🏥 Hospital Management System - Development Startup"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies if needed
echo "📦 Installing dependencies..."

if [ ! -d "backend/node_modules" ]; then
    echo "→ Backend dependencies..."
    cd backend && npm install && cd ..
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "→ Frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo ""
echo "✓ Dependencies installed"
echo ""
echo "🚀 Starting services..."
echo "   Backend:  http://localhost:5000"
echo "   Frontend: http://localhost:3000"
echo "   API Docs: http://localhost:5000/api/health"
echo ""

# Start both services
cd backend && npm start &
BACKEND_PID=$!

sleep 2

cd ../frontend && npm start &
FRONTEND_PID=$!

echo ""
echo "Services started. Press Ctrl+C to stop."
echo ""

wait
