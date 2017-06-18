import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { Link } from 'react-router';

import logo from '../images/honey_titre.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <IndexLink to="/"><img id="main-logo" className="img-responsive center-block" alt="logo" src={logo} ></img></IndexLink>
            <ul className="list-inline">
              {/* <li><Link to="/login">LOGIN</Link></li> */}
              <li><Link to="/">ILLUSTRATION</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/shop">SHOP</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
