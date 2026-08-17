import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work & Partners' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={handleLinkClick}>
          <svg viewBox="0 0 32 32" className="nav-logo-mark" aria-hidden="true">
            <path
              d="M2 20c3-4 6-4 9 0s6 4 9 0 6-4 9 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 26c3-4 6-4 9 0s6 4 9 0 6-4 9 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
          <span>
            BlueWave <strong>IT Solutions</strong>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={handleLinkClick}>
            Free Consultation
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Nav
