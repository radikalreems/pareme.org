import React, { useState } from 'react';

function Explorer() {
  const [hash, setHash] = useState('');
  const [frequency, setFrequency] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFrequency(null);
    setLoading(true);

    // Validate hash (64 hex chars)
    if (!/^[0-9a-fA-F]{64}$/.test(hash)) {
      setError('Invalid hash: must be 64 hexadecimal characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://pareme.sbs/hash/${hash}`);
      console.log('Fetch response:', response); // Debug: Log response object
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }
      const data = await response.json();
      console.log('Response data:', data);
      console.log('Frequency:', data.Frequency);
      setFrequency(data.Frequency);
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.log('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  console.log('Current frequency state:', frequency);

  return (
    <div className="Explorer">
      <header className="header">
        <h1>Pareme Explorer</h1>
        <p>Explore the Pareme Blockchain</p>
      </header>
      <main>
        <section className="section">
          <h2>Query Hash Frequency</h2>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            placeholder="Enter 64-character hex hash"
            maxLength={64}
            className="input"
            />
            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Loading...' : 'Query'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
          {frequency !== null && (
            <p className="result">Frequency: {frequency}</p>
          )}
        </section>
      </main>
      <footer>
        <p>© 2025 Pareme. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Explorer;