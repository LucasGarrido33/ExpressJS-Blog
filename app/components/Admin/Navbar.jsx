import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {logOutUser} from '../../actions/sessionActions';
import {browserHistory } from 'react-router';
import logo from '../../images/honey_titre.png';

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
      <nav className="navbar is-transparent is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item"to="/">
            HONEY DASHBOARD
            {/* <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img> */}
          </Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-danger is-inverted is-outlined" href="/logout" onClick={this.logOut}>
                    <span className="icon">
                      <i className="fa fa-sign-out"></i>
                    </span>
                    <span>Logout</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      // {/* // <Navbar fluid >
      // //   <Navbar.Header>
      // //     <Navbar.Brand>
      // //       <Link to="/">Honey Dashboard</Link>
      // //     </Navbar.Brand>
      // //   </Navbar.Header>
      // //     <Nav pullRight>
      // //       <NavItem eventKey={2} href="/logout" onClick={this.logOut}>Logout</NavItem>
      // //     </Nav>
      // // </Navbar> */}
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
