import React from 'react';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import myPhoto from './../assets/img/myPhoto.jpg'

export const HeaderMenu = () => {
  return (
    <header>
      <Navbar bg='light' expand={false}>
        <Container fluid>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href='/'>Posts</Nav.Link>
              <Nav.Link href='aboutMe'>About Me</Nav.Link>
            </Nav>
            <Nav>
              <Image src={myPhoto} roundedCircle height={100} width={100}></Image>
              <h3>Slava</h3>
              <Nav.Link href='mailto:mr.baranok.slava@gmail.com'>mr.baranok.slava@gmail.com</Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

