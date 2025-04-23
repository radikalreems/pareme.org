import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Pareme</h1>
        <p>A Lightweight Proof-of-Work Blockchain</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Description Section */}
        <section className="section description">
          <h2>About Pareme</h2>
          <p>
            Pareme is a minimalist blockchain designed for secure, decentralized verification. 
            Using proof-of-work, it separates application logic from verification, allowing 
            services to outsource trust to a lightweight chain. No tokens, no bloat—just 
            pure efficiency.
          </p>
        </section>

        {/* GitHub Link Section */}
        <section className="section github">
          <h2>Source Code</h2>
          <p>Explore the project on GitHub:</p>
          <a 
            href="https://github.com/radikalreems/pareme" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
          >
            Visit GitHub Repository
          </a>
        </section>

        {/* White Paper Link Section */}
        <section className="section whitepaper">
          <h2>White Paper</h2>
          <p>Learn more about Pareme’s design and use cases:</p>
          <a 
            href="/pareme-whitepaper.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
          >
            Read the White Paper
          </a>
        </section>

        {/* Contact Section */}
        <section className="section contact">
          <h2>Contact Us</h2>
          <p>Have questions or want to collaborate? Reach out!</p>
          <p>Email: <a href="mailto:alejandro@pareme.org">alejandro@pareme.org</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Pareme. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;