import React from 'react';
import {PostCard} from './PostCard';
import {ListGroup} from 'react-bootstrap';

export const Posts = () => {
  return (
    <>
      <ListGroup>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </ListGroup>
    </>
  );
};

