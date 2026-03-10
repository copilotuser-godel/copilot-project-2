# Task Management Application - Setup Guide

This is a full-stack .NET 10 + React task management application.

## Project Structure

- **backend/** - ASP.NET Core 10 API with Entity Framework Core
- **frontend/** - React 18 + TypeScript frontend with Vite
- **.vscode/tasks.json** - Build and run tasks

## Prerequisites

- .NET 10 SDK
- Node.js 18+

## Quick Start

1. **Start the Backend:**
   - Terminal 1: `cd backend && dotnet run`
   - API runs at `http://localhost:5000`

2. **Start the Frontend:**
   - Terminal 2: `cd frontend && npm install && npm run dev`
   - App runs at `http://localhost:3000`

3. Open browser to `http://localhost:3000`

## Features

- ✅ Create, read, update, delete tasks
- ✅ Mark tasks as complete
- ✅ Set due dates
- ✅ Add descriptions
- ✅ Responsive design

## Development Notes

- Backend uses in-memory database for quick development
- Both projects are configured with CORS for local development
- Swagger documentation available at `http://localhost:5000/swagger`

## API Endpoints

- `GET /api/tasks` - List all tasks
- `GET /api/tasks/{id}` - Get specific task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task
