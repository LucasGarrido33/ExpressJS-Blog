import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { Link } from 'react-router';

import logo from '../images/honey_titre.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <IndexLink to="/"><img id="main-logo" className="img-responsive center-block" alt="logo" src={logo} ></img></IndexLink>
          </div>
        </div>
        <div className="row header-nav">
          <ul className="list-inline">
            {/* <li><Link to="/login">LOGIN</Link></li> */}
            <li><Link to="/">ILLUSTRATION</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}


export default Header;
