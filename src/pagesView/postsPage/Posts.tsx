import React from 'react';
import {PostCard} from './PostCard';
import {ListGroup} from 'react-bootstrap';
import {PostType} from '../../types';

type PostsTypeProps = {
  posts: PostType[]
}

export const Posts = ({posts}: PostsTypeProps) => {
  return (
    <>
      <ListGroup>
        {posts.map(post => <PostCard key={post.id} post={post}/>)}
      </ListGroup>
    </>
  );
};

