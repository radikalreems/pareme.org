import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Explorer from './components/Explorer';

function Home() {
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
          Pareme is a lightweight proof-of-work blockchain designed to secure user-submitted hashes, acting as a shared security layer for diverse systems. Unlike traditional blockchains, it is not a cryptocurrency, lacking native tokens, public keys, or block ownership, focusing solely on hash anchoring. Each compact block, containing up to 10 hashes and minimal metadata, ensures efficiency for miners and nodes. By consolidating hash power, Pareme strengthens connected blockchain and non-blockchain applications without requiring them to maintain their own mining ecosystems.
          </p>
        </section>

        {/* GitHub Link Section */}
        <section className="section github">
          <h2>Source Code</h2>
          <p>Explore the project on GitHub</p>
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
          <p>Learn more about Pareme’s design and use cases</p>
          <a 
            href="/pareme-whitepaper.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
          >
            Read the White Paper
          </a>
        </section>

        {/* Forum Link Section */}
        <section className="section forum">
          <h2>Pareme Community Forum</h2>
          <p>Come talk with the Pareme community! Ask questions and develop together!</p>
          <a 
            href="https://pareme.discourse.group" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button"
          >
            Pareme Community
          </a>
        </section>

        {/* Explorer Link Section*/}
        <section className="section explorer">
          <h2>Blockchain Explorer</h2>
          <p>Query hashes and their frequencies</p>
          <Link to="/explorer" className="button">Go to Explorer</Link>
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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/explorer" element={<Explorer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;