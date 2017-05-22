import React, { Component } from 'react';
import insta_icon from '../images/logo_insta.png';
import pint_icon from '../images/logo_pint.png';
import tumblr_icon from '../images/logo_tumblr.png';
import youtube_icon from '../images/logo_youtube.png';
import facebook_icon from '../images/logo_fb.png';
import { Link } from 'react-router';

class Nav extends Component {
  render(){
    return (
      <ul className="list-unstyled">
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/about"><div className="circle orange">ABOUT</div></Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="instagram"><img className="img-fluid" src={insta_icon}></img></Link></li>
        <li><Link to="tumblr"><img className="img-fluid" src={tumblr_icon}></img></Link></li>
        <li><Link to="facebook"><img className="img-fluid" src={facebook_icon}></img></Link></li>
        <li><Link to="pinterest"><img className="img-fluid" src={pint_icon}></img></Link></li>
        <li><Link to="youtube"><img className="img-fluid" src={youtube_icon}></img></Link></li>
      </ul>
    );
  }
}

export default Nav;
