function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="eyebrow">IT Support & Consulting</p>
        <h1>
          Steady, dependable IT&nbsp;support for businesses that can't afford
          downtime.
        </h1>
        <p className="hero-sub">
          BlueWave IT Solutions keeps your networks secure, your systems
          running, and your team focused on the work that matters &mdash;
          backed by responsive, personal support.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get a Free Consultation
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore Services
          </a>
        </div>
      </div>

      <svg
        className="hero-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
          fill="var(--bg-alt)"
        />
      </svg>
    </section>
  )
}

export default Hero
