import React from 'react';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import profileImg from './../assets/img/profileImg.png'

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
              <Image  src={profileImg} roundedCircle width={100} height={100}></Image>
              <h3>Slava</h3>
              <Nav.Link href='mailto:mr.baranok.slava@gmail.com'>mr.baranok.slava@gmail.com</Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

