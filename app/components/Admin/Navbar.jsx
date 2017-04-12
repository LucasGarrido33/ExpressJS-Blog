import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Navbar fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Honey</Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/foo'}}>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
            </LinkContainer>
          </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
