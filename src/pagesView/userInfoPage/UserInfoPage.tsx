import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {Posts} from '../postsPage/Posts';

export const UserInfoPage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <Button onClick={() => navigation(-1)} variant="primary" size="sm">
        Go Back
      </Button>
      <Card>
        <Card.Header>
          PASHA
        </Card.Header>
        <Card.Body>
          <Card.Text>About me</Card.Text>
        </Card.Body>
      </Card>
      <Posts/>
    </div>
  );
};

