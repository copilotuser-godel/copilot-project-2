import { Outlet, useNavigate } from 'react-router-dom'
import './AdminLayout.css'

export function AdminLayout() {
  const navigate = useNavigate()

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Task Admin</h2>
        </div>
        
        <nav className="admin-nav">
          <button
            className="nav-link"
            onClick={() => navigate('/admin')}
          >
            📊 Dashboard
          </button>
          <button
            className="nav-link"
            onClick={() => navigate('/admin/tasks')}
          >
            📋 All Tasks
          </button>
          <button
            className="nav-link"
            onClick={() => navigate('/')}
          >
            👤 User View
          </button>
        </nav>

        <div className="admin-footer">
          <p>Task Management System</p>
          <span className="version">v1.0</span>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Panel</h1>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
