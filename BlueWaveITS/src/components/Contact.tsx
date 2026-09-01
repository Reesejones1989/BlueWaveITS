import { useState, type FormEvent } from 'react'

// Direct-contact email shown in the "Get In Touch" details below.
// The form itself no longer relies on mailto: -- see handleSubmit.
const CONTACT_EMAIL = 'mauricejonesjr@gmail.com'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

// Netlify Forms needs the submission encoded as a normal form POST.
// See the hidden mirror form in index.html (name="consultation") which is
// what lets Netlify detect this form at build time.
function encodeForNetlify(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
    )
    .join('&')
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({
          'form-name': 'consultation',
          name,
          email,
          company,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`)
      }

      setStatus('success')
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
    } catch (error) {
      console.error('Consultation form submission failed:', error)
      setStatus('error')
    }
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

        {status === 'success' ? (
          <div className="contact-form contact-success" role="status">
            <h3>Thanks, {name || 'there'}!</h3>
            <p>
              Your request has been sent. We'll follow up at {email} within
              one business day to schedule your consultation.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setStatus('idle')}
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            className="contact-form"
            name="consultation"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Required so Netlify Forms can match this submission to the
                statically-detected form in index.html. */}
            <input type="hidden" name="form-name" value="consultation" />
            {/* Honeypot spam trap: real visitors never see or fill this in. */}
            <p hidden>
              <label>
                Don&apos;t fill this out if you're human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Company
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
            <label>
              How can we help?
              <textarea
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>

            {status === 'error' && (
              <p className="contact-error" role="alert">
                Something went wrong sending your request. Please try again,
                or email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
