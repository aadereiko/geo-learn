import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HeaderElement } from './elements';

export const Header = () => {
  return (
    <HeaderElement>
      <Navbar.Brand href="home">Geo Learn</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/countries">Countries</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </HeaderElement>
  );
};
