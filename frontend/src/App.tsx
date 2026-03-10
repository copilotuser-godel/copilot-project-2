import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserApp } from './pages/UserApp'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { AdminLayout } from './components/AdminLayout'
import { AdminDashboard } from './components/AdminDashboard'
import { AdminTasks } from './components/AdminTasks'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="tasks" element={<AdminTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
