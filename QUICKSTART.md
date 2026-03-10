### Prerequisites

- **.NET 10 SDK**
- **Node.js 18+**

### Running the Application

1. **Backend (Terminal 1):**
   ```bash
   cd backend
   dotnet run
   ```

2. **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser

### Backend Details

- API runs on `http://localhost:5000`
- Swagger docs: `http://localhost:5000/swagger`
- Uses in-memory database for quick development

### Frontend Details

- Built with React 18 + Vite
- TypeScript for type safety
- Auto-imports from API at `/api/tasks`
