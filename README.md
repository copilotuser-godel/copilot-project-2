# Task Management Application

A full-stack task management application built with **.NET 10** and **React 18**.

## Project Structure

```
copilot-project/
├── backend/          # ASP.NET Core 10 API
│   ├── Controllers/  # API endpoints
│   ├── Models/       # Data models
│   ├── Data/         # Database context
│   └── Program.cs    # Application setup
├── frontend/         # React + Vite application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API client
│   │   └── App.tsx       # Main app
│   └── package.json  # Dependencies
└── README.md
```

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Set due dates for tasks
- ✅ Add descriptions to tasks
- ✅ Responsive, modern UI
- ✅ Fast API with Swagger documentation

## Prerequisites

- **.NET 10 SDK** - Download from [dotnet.microsoft.com](https://dotnet.microsoft.com)
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org)

## Getting Started

### 1. Backend Setup

```bash
cd backend
dotnet restore
dotnet run
```

The API will be available at `https://localhost:5001` (or `http://localhost:5000`)
Swagger documentation: `https://localhost:5001/swagger`

### 2. Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

### Example Request

```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "dueDate": "2026-03-15T18:00:00"
  }'
```

## Technologies Used

### Backend
- ASP.NET Core 10
- Entity Framework Core
- In-Memory Database (easily switchable to SQL Server)
- Swagger/OpenAPI

### Frontend
- React 18
- TypeScript
- Vite (build tool)
- Axios (HTTP client)
- CSS3

## Development

### Building the Frontend

```bash
cd frontend
npm run build
```

### Building the Backend

```bash
cd backend
dotnet build
```

### Running Tests

Tests can be added using:
- Backend: xUnit, NUnit
- Frontend: Vitest, Jest

## Database

Currently uses **In-Memory Database** for development. To switch to SQL Server:

1. Update `Program.cs` in the backend
2. Add connection string to `appsettings.json`
3. Run EF Core migrations

## CORS

The backend is configured to accept requests from:
- `http://localhost:3000` (React dev server)
- `http://localhost:5173` (Alternative Vite port)

## License

MIT
