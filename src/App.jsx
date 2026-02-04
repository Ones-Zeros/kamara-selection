import './App.css'

const highlights = [
  { title: 'Handpicked Gems', text: 'Curated stones chosen for brilliance, clarity, and enduring value.' },
  { title: 'Custom Creations', text: 'From sketches to settings, we craft unique pieces that tell your story.' },
  { title: 'Worldwide Sourcing', text: 'Trusted partners across the globe to source exceptional gemstones.' },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="badge">KARMAR Selection</div>
        <h1>Where Gems Meet Artistry</h1>
        <p>
          Boutique gemstone experts offering bespoke jewelry design and curated selections for discerning
          collectors.
        </p>
        <div className="actions">
          <a className="primary" href="mailto:hello@karmarselection.com">
            Book a consultation
          </a>
          <a className="ghost" href="tel:+11234567890">
            Call us
          </a>
        </div>
      </header>

      <section className="panel">
        <h2>What we do</h2>
        <div className="grid">
          {highlights.map(({ title, text }) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel light">
        <div className="panel-content">
          <div>
            <p className="eyebrow">Our promise</p>
            <h2>Authenticity, transparency, and care.</h2>
            <p>
              Every gem is certified and ethically sourced. We guide you through clarity, cut, and color so you can
              choose with confidence.
            </p>
          </div>
          <div className="stats">
            <div>
              <span className="stat-number">15+</span>
              <span className="stat-label">Years expertise</span>
            </div>
            <div>
              <span className="stat-number">3</span>
              <span className="stat-label">Continents sourced</span>
            </div>
            <div>
              <span className="stat-number">100%</span>
              <span className="stat-label">Certified stones</span>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Ready to create something timeless?</h2>
        <p className="cta-text">
          Share your vision and we&apos;ll shape it into a piece that lasts for generations.
        </p>
        <a className="primary wide" href="mailto:hello@karmarselection.com">
          Start your project
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} KARMAR Selection. Crafted with care.</p>
      </footer>
    </div>
  )
}

export default App
