import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Post } from './components/Post';

/**
 * Quick notes 📝
 * ---
 * @note uncomment the '//' code comments
 * => view SnowPack esm magic in your browser! 🎉
 * @note https://github.com/snowpackjs/snowpack/discussions/2345
 * ☝️ note for streaming imports
 */

// import { If } from 'react-if';
// import confetti from 'canvas-confetti';

import './App.css';

interface AppProps {}
const queryClient = new QueryClient();

function App({}: AppProps) {
  const postId = 1;
  // const foo = 'bar';
  // confetti();
  return (
    <div className="App">
      <header className="App-header">
        <p>Built with Snowpack! 🚀</p>
        <p>Lets explore React Query using Streaming Imports</p>
        {/* <If condition={foo === 'biz'}>
          <p>This is really cool b/c we did the import on the the fly</p>
        </If> */}
      </header>
      <hr />
      <section className="App-content">
        <h2>This post is fetched from an api in a React Query hook 👇 </h2>
        <QueryClientProvider client={queryClient}>
          <Post postId={postId} />
        </QueryClientProvider>
      </section>
    </div>
  );
}

export default App;
