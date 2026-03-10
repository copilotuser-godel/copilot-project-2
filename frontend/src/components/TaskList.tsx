import { TaskItem } from '../services/taskApi'
import './TaskList.css'

interface TaskListProps {
  tasks: TaskItem[]
  onToggleComplete: (id: number, isCompleted: boolean) => void
  onDelete: (id: number) => void
  isLoading?: boolean
}

export function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
  isLoading = false,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Create one to get started!</p>
      </div>
    )
  }

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
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
            <div className="task-content">
              <label className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={(e) => onToggleComplete(task.id, e.target.checked)}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
              </label>

              <div className="task-info">
                <h3 className="task-title">{task.title}</h3>
                {task.description && <p className="task-description">{task.description}</p>}
                <p className="task-due-date">{formatDate(task.dueDate)}</p>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)}
              disabled={isLoading}
              aria-label="Delete task"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
