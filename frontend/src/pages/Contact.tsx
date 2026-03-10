import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

export function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'general',
      message: '',
    })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact-page">
      <header className="contact-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </header>

      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <div className="info-card">
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:support@taskmanagement.com">support@taskmanagement.com</a>
                </p>
                <small>We respond within 24 hours</small>
              </div>

              <div className="info-item">
                <h3>📱 Phone</h3>
                <p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
                <small>Monday - Friday, 9am - 6pm EST</small>
              </div>

              <div className="info-item">
                <h3>🏢 Address</h3>
                <p>
                  123 Task Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
                <small>Visit our office by appointment</small>
              </div>

              <div className="info-item">
                <h3>🕐 Hours</h3>
                <ul>
                  <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</li>
                  <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
