import React from 'react';
import { Link } from 'react-router-dom';
// import { If } from 'react-if';

export function Home(): JSX.Element {
  // const foo = 'bar';
  return (
    <main className="App">
      <header className="App-header">
        <h1>Built with Snowpack! 🚀</h1>
      </header>
      <h2>Check out some Cool New Tech</h2>
      {/* <If condition={foo === 'biz'}>
            <p>This is really cool b/c we did the import on the the fly</p>
          </If> */}
      <nav className="App-navigation">
        <ul>
          <li>
            <Link to="/react-query">React Query ➡️</Link>
          </li>
          <li>
            <Link to="/react-lazy">React Lazy ➡️</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
