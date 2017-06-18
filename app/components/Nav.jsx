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
        <li><a href="https://www.instagram.com/opheliehoney/"><img className="img-fluid" src={insta_icon}></img></a></li>
        <li><a href="https://honeysupercat.tumblr.com/"><img className="img-fluid" src={tumblr_icon}></img></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100009302740584"><img className="img-fluid" src={facebook_icon}></img></a></li>
        <li><a href="https://fr.pinterest.com/ophelieortal/"><img className="img-fluid" src={pint_icon}></img></a></li>
        <li><a href="https://www.linkedin.com/in/ophelie-ortal-15a29164/"><img className="img-fluid" src={youtube_icon}></img></a></li>
      </ul>
    );
  }
}

export default Nav;
