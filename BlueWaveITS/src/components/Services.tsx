const SERVICES = [
  {
    title: 'Managed IT Support',
    text: '24/7 monitoring, helpdesk support, and proactive maintenance that keeps your team productive.',
    icon: (
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 15h8m-4-4v4" />
    ),
  },
  {
    title: 'Network & Infrastructure',
    text: 'Design, installation, and hardening of the networks your business depends on every day.',
    icon: (
      <path d="M12 3v4M5 21h14M7 21v-6h10v6M12 7a5 5 0 0 0-5 5v3h10v-3a5 5 0 0 0-5-5Z" />
    ),
  },
  {
    title: 'Cybersecurity',
    text: 'Risk assessments, endpoint protection, and staff training to keep threats out of your business.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />,
  },
  {
    title: 'Cloud Solutions',
    text: 'Migration and management for Microsoft 365, Google Workspace, and cloud infrastructure.',
    icon: (
      <path d="M7 18a4 4 0 1 1 .74-7.93A5.5 5.5 0 0 1 18 12.5 3.5 3.5 0 0 1 17.5 18H7Z" />
    ),
  },
  {
    title: 'Backup & Disaster Recovery',
    text: 'Automated backups and recovery plans so a hardware failure or breach never means data loss.',
    icon: (
      <path d="M4 7a8 8 0 1 1 1.5 9.5M4 7v5h5M4 7l3 1" />
    ),
  },
  {
    title: 'IT Consulting & Strategy',
    text: 'Technology roadmaps and budgeting guidance to help you make confident, informed decisions.',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />,
  },
  {
    title: 'Website Creation',
    text: 'Custom-built, responsive websites that give your business a fast, professional online presence.',
    icon: (
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm0 3h18M6 5.5v0M9 5.5v0" />
    ),
  },
]

function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="section-inner">
        <p className="eyebrow">What We Do</p>
        <h2>Services built around your business</h2>
        <p className="section-lead">
          From daily support to long-term strategy, we cover the full range
          of IT needs so you have one team to call.
        </p>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <svg
                viewBox="0 0 24 24"
                className="service-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {service.icon}
              </svg>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
