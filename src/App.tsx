import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { ReactLazy } from './components/ReactLazy';
import { ReactQuery } from './components/ReactQuery';
import './App.css';
interface AppProps {}

/**
 * Quick notes 📝
 * ---
 * @note uncomment the '//' code comments
 * => view SnowPack esm magic in your browser! 🎉
 * @note https://github.com/snowpackjs/snowpack/discussions/2345
 * ☝️ note for streaming imports
 */

// import confetti from 'canvas-confetti';

function App({}: AppProps): JSX.Element {
  // confetti();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/react-query">
          <ReactQuery />
        </Route>
        <Route path="/react-lazy">
          <ReactLazy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
