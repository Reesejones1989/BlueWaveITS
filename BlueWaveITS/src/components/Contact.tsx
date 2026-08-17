import { useState, type FormEvent } from 'react'

// Update this if you set up a dedicated business inbox.
const CONTACT_EMAIL = 'mauricejonesjr@gmail.com'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Consultation request from ${name || 'website visitor'}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2>Request a free consultation</h2>
          <p className="section-lead">
            Tell us a bit about your business and what you need help with.
            We'll follow up to schedule a no-obligation consultation.
          </p>

          <ul className="contact-details">
            <li>
              <strong>Email</strong>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Availability</strong>
              <span>Mon &ndash; Fri, 9am &ndash; 6pm</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Company
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <label>
            How can we help?
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
