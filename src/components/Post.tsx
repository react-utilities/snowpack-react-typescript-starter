import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const getPostById = async (id: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return data;
};

function fetchFirstPost(postId: number) {
  return useQuery(['post', postId], () => getPostById(postId));
}

export function Post({ postId }): JSX.Element {
  const { status, data, error, isFetching } = fetchFirstPost(postId);

  return (
    <div>
      {!postId || status === 'loading' ? (
        <span>Loading...</span>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h3>{data.title}</h3>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}
