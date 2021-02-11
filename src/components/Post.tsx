import React from 'react';
import { useQuery, QueryObserverResult } from 'react-query';

/**
 * Post 📝
 * ---
 * @description renders a post
 * @note this components uses react-query to fetch a post
 * and render it based on fetch response
 */

export type PostData = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type PostProps = {
  postId: number;
};

export type PostResponseData = {
  data?: PostData;
  status: string;
  isFetching: boolean;
};

async function getPostById(id: number): Promise<PostData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = res.json();
  if (!post) {
    return {
      body: '',
      id: 0,
      title: 'No Post Found',
      userId: 0,
    };
  }
  return post;
}

export function usePost(id: number) {
  return useQuery(['post', id], () => getPostById(id));
}

export function PostContent({
  status,
  isFetching,
  data,
}: QueryObserverResult<PostData>) {
  const isError = status === 'error';
  const isLoadingContent = status === 'loading' || isFetching;
  const title = isError
    ? 'Error loading post'
    : isLoadingContent
    ? 'Loading The Post'
    : data?.title;
  const content = isError
    ? 'There was an error loading this post.'
    : isLoadingContent
    ? 'Loading post content...'
    : data?.body;
  return (
    <article className="post">
      <h1 className="post__title">{title}</h1>
      <p className="post__content">{content}</p>
    </article>
  );
}

export function Post({ postId }: PostProps): JSX.Element {
  const postData = usePost(postId);
  return <PostContent {...postData} />;
}
