import React from 'react';
import { Link } from 'react-router-dom';

export function ReactLazy(): JSX.Element {
  return (
    <main className="App">
      <header className="App-header">
        <h1>React Lazy</h1>
      </header>
      <h2>More About React Lazy Coming!!</h2>
      <nav className="App-navigation">
        <Link to="/">Back to Home ↩️</Link>
      </nav>
    </main>
  );
}
