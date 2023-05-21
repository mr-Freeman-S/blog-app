import React from 'react';
import {Card} from 'react-bootstrap';

export const CommentCard = () => {
  return (
    <Card border="secondary" className='m-3'>
      <Card.Header>MR.BARANOK@MAIL.RU</Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

