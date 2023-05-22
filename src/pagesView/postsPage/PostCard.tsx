import React from 'react';
import {Card, Image, Nav} from 'react-bootstrap';
import profileImg from './../../assets/img/profileImg.png'
import {PostType} from '../../types';
import {CommentsGroup} from './CommentsGroup';

type PostTypeProps = {
  post: PostType
}

export const PostCard = ({post}: PostTypeProps) => {
  return (
    <Card border='primary' className='flex-row align-items-center m-4 p-2'>
      <Nav.Link href={`/userInfo/${post.userId}`}>
        <Image roundedCircle width={50} height={50} src={profileImg}/>
      </Nav.Link>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <CommentsGroup postId={post.id}/>
      </Card.Body>
    </Card>
  );
};

