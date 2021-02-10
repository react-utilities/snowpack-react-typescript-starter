import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import { If } from 'react-if';
// import confetti from 'canvas-confetti';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  // const foo = 'bar';
  // confetti();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Wow, this change is quick! 🚀</p>
        <p>Is the issues below b/c of the esm install!</p>
        {/* <If condition={foo === 'biz'}>
          <p>This is really cool b/c we did the import on the the fly</p>
        </If> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
