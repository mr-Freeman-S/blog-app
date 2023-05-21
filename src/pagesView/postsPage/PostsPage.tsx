import React from 'react';
import {PostCard} from './PostCard';
import {ListGroup} from 'react-bootstrap';
import {HeaderMenu} from '../HeaderMenu';

export const PostsPage = () => {
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

