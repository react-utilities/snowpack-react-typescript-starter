import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

const ChildContent = React.lazy(() => import('./LazyContent'));

export const BoxWithButton = () => {
  const [hasContentLoaded, setHasContentLoaded] = useState(false);
  const RenderChildContent = () => (hasContentLoaded ? <ChildContent /> : null);
  const addChildContentOnClick = () => {
    if (!hasContentLoaded) {
      setHasContentLoaded(true);
    }
  };
  /**
   * @note Open the network tab in browser developer console
   * You will see LazyContent.js loaded only after clicking the button => React Lazy
   */
  return (
    <>
      <button onClick={addChildContentOnClick}>Load Child Content</button>
      <Suspense fallback={<p>Loading....</p>}>
        <RenderChildContent />
      </Suspense>
    </>
  );
};

export function ReactLazy(): JSX.Element {
  return (
    <main className="App">
      <header className="App-header">
        <h1>React Lazy</h1>
      </header>
      <h2>Lazy Load Child Component on Button Click</h2>
      <BoxWithButton />
      <nav className="App-navigation">
        <Link to="/">Back to Home ↩️</Link>
      </nav>
    </main>
  );
}
