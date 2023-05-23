import React, {useState} from 'react';
import {Card, Image, Nav} from 'react-bootstrap';
import profileImg from './../../assets/img/profileImg.png'
import {PostType} from '../../types';
import {CommentsGroup} from './CommentsGroup';
import {useAppSelector} from "../../store/hooks";

type PostTypeProps = {
  post: PostType
}

export const PostCard = ({post}: PostTypeProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadingHandler = (postId:number) => {
     postId === post.id ? setIsLoading(true) : setIsLoading(false)
  }

  return (
    <Card border='primary' className='flex-row align-items-center m-4 p-2'>
      <Nav.Link href={`/userInfo/${post.userId}`}>
        <Image roundedCircle width={50} height={50} src={profileImg}/>
      </Nav.Link>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <CommentsGroup isLoading={post.isLoading} postId={post.id} loadingHandler={loadingHandler}/>
      </Card.Body>
    </Card>
  );
};

