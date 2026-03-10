import { useEffect, useState } from 'react'
import { taskApi, TaskItem, UpdateTaskDto } from '../services/taskApi'
import './AdminTasks.css'

export function AdminTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'overdue'>('all')
  const [editingId, setEditingId] = useState<number | null>(null)

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

  const handleUpdateTask = async (id: number, updates: UpdateTaskDto) => {
    try {
      await taskApi.updateTask(id, updates)
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)))
      setEditingId(null)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      await taskApi.deleteTask(id)
      setTasks(tasks.filter((t) => t.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'pending':
        return !task.isCompleted
      case 'completed':
        return task.isCompleted
      case 'overdue':
        return (
          !task.isCompleted &&
          task.dueDate &&
          new Date(task.dueDate) < new Date()
        )
      default:
        return true
    }
  })

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No due date'
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="admin-tasks">
      <div className="tasks-header">
        <h2>All Tasks</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending ({tasks.filter((t) => !t.isCompleted).length})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.filter((t) => t.isCompleted).length})
          </button>
          <button
            className={`filter-btn ${filter === 'overdue' ? 'active' : ''}`}
            onClick={() => setFilter('overdue')}
          >
            Overdue ({
              tasks.filter(
                (t) =>
                  !t.isCompleted &&
                  t.dueDate &&
                  new Date(t.dueDate) < new Date()
              ).length
            })
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="loading">Loading tasks...</p>
      ) : filteredTasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks match the current filter.</p>
        </div>
      ) : (
        <div className="tasks-table-container">
          <table className="tasks-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className={`task-row ${task.isCompleted ? 'completed' : ''}`}>
                  <td className="cell-id">#{task.id}</td>
                  <td className="cell-title">
                    {editingId === task.id ? (
                      <input
                        type="text"
                        defaultValue={task.title}
                        onBlur={(e) => {
                          if (e.currentTarget.value !== task.title) {
                            handleUpdateTask(task.id, {
                              title: e.currentTarget.value,
                            })
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUpdateTask(task.id, {
                              title: e.currentTarget.value,
                            })
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span onClick={() => setEditingId(task.id)}>{task.title}</span>
                    )}
                  </td>
                  <td className="cell-description">{task.description || '—'}</td>
                  <td className="cell-status">
                    <label className="status-checkbox">
                      <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={(e) =>
                          handleUpdateTask(task.id, {
                            isCompleted: e.target.checked,
                          })
                        }
                      />
                      <span className={task.isCompleted ? 'completed' : 'pending'}>
                        {task.isCompleted ? '✓ Completed' : 'Pending'}
                      </span>
                    </label>
                  </td>
                  <td className="cell-duedate">
                    <span
                      className={
                        task.dueDate && !task.isCompleted && new Date(task.dueDate) < new Date()
                          ? 'overdue'
                          : ''
                      }
                    >
                      {formatDate(task.dueDate)}
                    </span>
                  </td>
                  <td className="cell-created">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </td>
                  <td className="cell-actions">
                    <button
                      className="action-btn delete"
                      onClick={() => handleDeleteTask(task.id)}
                      title="Delete task"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
