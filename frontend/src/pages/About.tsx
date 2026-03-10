import { useNavigate } from 'react-router-dom'
import './About.css'

export function About() {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      <header className="about-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1>About Task Management</h1>
        <p>Simplifying productivity, one task at a time</p>
      </header>

      <main className="about-main">
        <div className="about-container">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Task Management, we believe that organization is the key to productivity. Our mission is to provide
              a simple, intuitive platform that helps individuals and teams stay focused on what matters most. We're
              committed to empowering our users to achieve their goals efficiently.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Task Management</h3>
                <p>Create, organize, and track tasks with ease. Never lose track of what needs to be done.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Due Dates & Reminders</h3>
                <p>Set due dates for tasks and stay on top of deadlines with our visual indicators.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Admin Dashboard</h3>
                <p>Get insights into task completion rates, progress tracking, and team productivity metrics.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Progress Tracking</h3>
                <p>Monitor completion rates and see your progress at a glance with beautiful analytics.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast & Reliable</h3>
                <p>Built with modern technology for speed and reliability. Enjoy a smooth experience every time.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure & Private</h3>
                <p>Your data is safe with us. We use industry-standard security practices to protect your information.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              We're a passionate team of developers and designers dedicated to creating tools that make a real
              difference. With years of experience in productivity software, we understand the challenges our users
              face and build solutions accordingly.
            </p>

            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💻</div>
                <h3>Developer</h3>
                <p>Backend & API Development</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">👩‍💻</div>
                <h3>Frontend Engineer</h3>
                <p>UI/UX Implementation</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">🎨</div>
                <h3>Designer</h3>
                <p>Visual Design & UX</p>
              </div>

              <div className="team-member">
                <div className="member-avatar">🚀</div>
                <h3>Product Manager</h3>
                <p>Strategy & Direction</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Technology Stack</h2>
            <p>
              We leverage cutting-edge technologies to build a fast, scalable, and reliable platform:
            </p>

            <div className="tech-stack">
              <div className="tech-category">
                <h3>Backend</h3>
                <ul>
                  <li>.NET 10</li>
                  <li>Entity Framework Core</li>
                  <li>ASP.NET Core</li>
                </ul>
              </div>

              <div className="tech-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React 18</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>React Router</li>
                </ul>
              </div>

              <div className="tech-category">
                <h3>Database</h3>
                <ul>
                  <li>Entity Framework Core</li>
                  <li>SQL Server Ready</li>
                  <li>In-Memory Support</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>🎯 Simple & Intuitive</h3>
                <p>No steep learning curve. Start managing tasks immediately.</p>
              </div>

              <div className="benefit-item">
                <h3>⚡ High Performance</h3>
                <p>Built for speed. Experience lightning-fast task management.</p>
              </div>

              <div className="benefit-item">
                <h3>📈 Scalable</h3>
                <p>From personal use to team management, we scale with you.</p>
              </div>

              <div className="benefit-item">
                <h3>🤝 Customer Support</h3>
                <p>Dedicated support team ready to help you succeed.</p>
              </div>
            </div>
          </section>

          <section className="about-section cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users who are already managing their tasks more efficiently.</p>
            <button className="cta-btn" onClick={() => navigate('/')}>
              Start Managing Tasks Now
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
