const PARTNERS = ['Nelson & Associates']

// Add `image: '/path/to/screenshot.png'` once you have screenshots for these.
type WebProject = {
  title: string
  type: string
  text: string
  image?: string
  url?: string
}

const PROJECTS: WebProject[] = [
  {
    title: 'Mason 8th Grade Football',
    type: 'Sports Team Site',
    text: 'A schedule and roster hub for Mason Middle School 8th grade football, with game times, locations, and full team rosters.',
    url: 'https://mms8thgrade.netlify.app/',
  },
  {
    title: 'Signature Interior Build Services',
    type: 'Home Services Business',
    text: 'A service site for an apartment-turn company, showcasing turn services and a request-a-quote flow for property managers.',
    url: 'https://choosesibs.netlify.app/',
  },
  {
    title: 'Cusyns IT & TV Mounting',
    type: 'IT & Installation Business',
    text: 'A business site for an IT support and TV mounting company, with services, testimonials, and a contact page.',
    url: 'https://cusyns.onrender.com',
  },
]

function Work() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <p className="eyebrow">Our Track Record</p>
        <h2>Partners & previous work</h2>
        <p className="section-lead">
          A look at the organizations we work alongside and a sample of the
          webpages we've built for various purposes.
        </p>

        <div className="partners-row">
          {PARTNERS.map((partner) => (
            <div className="partner-badge" key={partner}>
              {partner}
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <a
              className="project-card"
              key={project.title}
              href={project.url}
              target={project.url ? '_blank' : undefined}
              rel={project.url ? 'noreferrer' : undefined}
            >
              <div className="project-thumb">
                {project.image ? (
                  <img src={project.image} alt="" />
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 3h16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="project-client">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
