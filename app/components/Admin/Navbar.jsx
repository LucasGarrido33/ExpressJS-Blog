import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {logOutUser} from '../../actions/sessionActions';
import {browserHistory } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
  event.preventDefault();
  this.props.logOutUser();
  browserHistory.push('/');

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
            <NavItem eventKey={2} href="/logout" onClick={this.logOut}>log out</NavItem>
          </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {logged_in: state.session};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => {
      dispatch(logOutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
