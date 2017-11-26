import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { Link } from 'react-router';
import Nav from './Nav';

import logo from '../images/honey_titre.png';

class Header extends Component {
  render(){
    return (
      <header>
          <div className="">
            <IndexLink to="/"><img id="main-logo" className="image" width="600" alt="logo" src={logo} ></img></IndexLink>
          </div>
        <div className="header-nav">
          <ul className="list-inline menu">
            <li><IndexLink to="/" className="scale" activeClassName="active-header">ILLUSTRATION</IndexLink></li>
            <li><Link to="/contact" className="scale" activeClassName="active-header">CONTACT</Link></li>
            <li><a href="https://www.etsy.com/fr/shop/HoneyShopArt" className="scale">SHOP</a></li>
          </ul>
          <div className="social-list is-hidden-desktop">
            <Nav style="list-inline small"/>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
