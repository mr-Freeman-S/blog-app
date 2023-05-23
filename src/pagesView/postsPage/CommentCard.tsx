import React from 'react';
import {Card} from 'react-bootstrap';

type CommentCardPropsType = {
  email: string
  text: string
}

export const CommentCard:React.FC<CommentCardPropsType> = ({email,text}) => {
  return (
    <Card border="secondary" className='m-3'>
      <Card.Header>{email}</Card.Header>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

