import React from 'react';
import {Card, Container, Image, Nav, Navbar} from 'react-bootstrap';
import profileImg from './../../assets/img/profileImg.png'
import {CommentCard} from './CommentCard';


export const PostCard = () => {
  return (
    <Card className='flex-row align-items-center m-4 p-2'>
      <Nav.Link href={`/userInfo/1`}>
        <Image roundedCircle width={50} height={50} src={profileImg}/>
      </Nav.Link>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Navbar  expand={false}>
          <Container fluid>
            <Navbar.Toggle>Comments</Navbar.Toggle>
            <Navbar.Collapse>
              <CommentCard/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Card.Body>
    </Card>
  );
};

