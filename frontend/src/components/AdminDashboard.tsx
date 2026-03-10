import { useEffect, useState } from 'react'
import { taskApi, TaskItem } from '../services/taskApi'
import './AdminDashboard.css'

export function AdminDashboard() {
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      setIsLoading(true)
      const data = await taskApi.getTasks()
      setTasks(data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.isCompleted).length
  const pendingTasks = totalTasks - completedTasks
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const overdueTasks = tasks.filter((t) => {
    if (!t.dueDate || t.isCompleted) return false
    return new Date(t.dueDate) < new Date()
  }).length

  const upcomingTasks = tasks.filter((t) => {
    if (!t.dueDate || t.isCompleted) return false
    const dueDate = new Date(t.dueDate)
    const today = new Date()
    const sevenDaysFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    return dueDate >= today && dueDate <= sevenDaysFromNow
  }).length

  return (
    <div className="admin-dashboard">
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Total Tasks</h3>
            <p className="stat-value">{totalTasks}</p>
          </div>
        </div>

        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Completed</h3>
            <p className="stat-value">{completedTasks}</p>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Pending</h3>
            <p className="stat-value">{pendingTasks}</p>
          </div>
        </div>

        <div className="stat-card overdue">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3>Overdue</h3>
            <p className="stat-value">{overdueTasks}</p>
          </div>
        </div>

        <div className="stat-card upcoming">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Upcoming (7 days)</h3>
            <p className="stat-value">{upcomingTasks}</p>
          </div>
        </div>

        <div className="stat-card completion">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>Completion Rate</h3>
            <p className="stat-value">{completionRate}%</p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-card">
          <h3>Completion Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
          </div>
          <p className="progress-text">
            {completedTasks} of {totalTasks} tasks completed
          </p>
        </div>

        <div className="chart-card">
          <h3>Task Breakdown</h3>
          <ul className="breakdown-list">
            <li>
              <span className="badge completed">●</span>
              Completed: {completedTasks} ({totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%)
            </li>
            <li>
              <span className="badge pending">●</span>
              Pending: {pendingTasks} ({totalTasks > 0 ? Math.round((pendingTasks / totalTasks) * 100) : 0}%)
            </li>
            <li>
              <span className="badge overdue">●</span>
              Overdue: {overdueTasks}
            </li>
          </ul>
        </div>
      </div>

      {isLoading && <p className="loading">Loading data...</p>}
    </div>
  )
}
