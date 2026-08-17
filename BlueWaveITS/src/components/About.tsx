const VALUES = [
  {
    title: 'Reliability First',
    text: 'Proactive monitoring and maintenance so small issues get fixed before they become outages.',
  },
  {
    title: 'Security Minded',
    text: 'Every engagement starts with protecting your data, your network, and your customers.',
  },
  {
    title: 'Client Focused',
    text: "We explain things in plain language and build solutions around how your business actually works.",
  },
  {
    title: 'Built to Scale',
    text: 'Solutions that fit your business today and grow with you as your needs change.',
  },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>About BlueWave IT Solutions</h2>
          <p className="section-lead">
            BlueWave IT Solutions is an IT support and consulting company
            dedicated to helping small and mid-sized businesses run on
            technology they can trust. From day-to-day helpdesk support to
            network security and cloud strategy, we act as a dependable
            technology partner &mdash; not just a vendor.
          </p>
          <p className="section-lead">
            Our approach is simple: understand your business first, then
            design IT solutions that keep things running smoothly, securely,
            and within budget.
          </p>
        </div>

        <div className="values-grid">
          {VALUES.map((value) => (
            <div className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
