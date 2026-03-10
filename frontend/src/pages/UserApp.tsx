import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { taskApi, TaskItem, CreateTaskDto } from '../services/taskApi'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'
import './UserApp.css'

export function UserApp() {
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const loadTasks = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await taskApi.getTasks()
      setTasks(data)
    } catch (err) {
      setError('Failed to load tasks. Please check if the backend is running.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const handleAddTask = async (newTask: CreateTaskDto) => {
    try {
      setError(null)
      const createdTask = await taskApi.createTask(newTask)
      setTasks([...tasks, createdTask])
    } catch (err) {
      setError('Failed to create task')
      console.error(err)
    }
  }

  const handleToggleComplete = async (id: number, isCompleted: boolean) => {
    try {
      setError(null)
      await taskApi.updateTask(id, { isCompleted })
      setTasks(tasks.map((t) => (t.id === id ? { ...t, isCompleted } : t)))
    } catch (err) {
      setError('Failed to update task')
      console.error(err)
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      setError(null)
      await taskApi.deleteTask(id)
      setTasks(tasks.filter((t) => t.id !== id))
    } catch (err) {
      setError('Failed to delete task')
      console.error(err)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Task Management</h1>
          <p className="subtitle">Organize your tasks efficiently</p>
        </div>
        <div className="header-actions">
          <button className="header-btn about-btn" onClick={() => navigate('/about')}>
            ℹ️ About
          </button>
          <button className="header-btn contact-btn" onClick={() => navigate('/contact')}>
            📧 Contact
          </button>
          <button className="header-btn admin-btn" onClick={() => navigate('/admin')}>
            📊 Admin Panel
          </button>
        </div>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        <TaskForm onSubmit={handleAddTask} isLoading={isLoading} />

        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          isLoading={isLoading}
        />
      </main>
    </div>
  )
}
