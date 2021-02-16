import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from './Post';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export function ReactQuery(): JSX.Element {
  const postId = 1;
  return (
    <main className="App">
      <header className="App-header">
        <h1>React Query</h1>
      </header>
      <h2>This post is fetched from an api in a React Query hook 👇 </h2>
      <QueryClientProvider client={queryClient}>
        <Post postId={postId} />
      </QueryClientProvider>
      <nav className="App-navigation">
        <Link to="/">Back to Home ↩️</Link>
      </nav>
    </main>
  );
}
