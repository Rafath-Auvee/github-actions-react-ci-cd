import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <span className="badge">GitHub Actions CI/CD</span>
        <h1>React + Vite App</h1>
        <p>Automated build pipeline with a self-hosted runner</p>
        <div className="status">
          <span className="dot" />
          Pipeline Active on Development Branch
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <div className="card-icon">⚡</div>
          <h2>Vite</h2>
          <p>Lightning-fast builds with native ES modules and optimized bundling.</p>
        </div>
        <div className="card">
          <div className="card-icon">⚛️</div>
          <h2>React</h2>
          <p>Component-based UI library for building modern web interfaces.</p>
        </div>
        <div className="card">
          <div className="card-icon">🤖</div>
          <h2>GitHub Actions</h2>
          <p>CI pipeline runs automatically on every push to the development branch.</p>
        </div>
        <div className="card">
          <div className="card-icon">🖥️</div>
          <h2>Self-Hosted Runner</h2>
          <p>Jobs execute on a local machine registered with your GitHub repository.</p>
        </div>
      </section>

      <footer className="footer">
        Module 5 Assignment &mdash; GitHub Actions Fundamentals
      </footer>
    </div>
  )
}
