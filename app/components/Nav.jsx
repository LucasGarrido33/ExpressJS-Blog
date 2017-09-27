import React, { Component } from 'react';
import insta_icon from '../images/logo_insta.png';
import pint_icon from '../images/logo_pint.png';
import tumblr_icon from '../images/logo_tumblr.png';
import linkedin_icon from '../images/logo_linkedin.png';
import facebook_icon from '../images/logo_fb.png';

class Nav extends Component {
  render(){
    return (
      <ul className={this.props.style}>
        <li><a href="https://www.instagram.com/opheliehoney/"><img className="img-fluid scale" src={insta_icon}></img></a></li>
        <li><a href="https://honeysupercat.tumblr.com/"><img className="img-fluid scale" src={tumblr_icon}></img></a></li>
        <li><a href="https://www.facebook.com/opheliehoney/"><img className="img-fluid scale" src={facebook_icon}></img></a></li>
        <li><a href="https://fr.pinterest.com/ophelieortal/"><img className="img-fluid scale" src={pint_icon}></img></a></li>
        <li><a href="https://www.linkedin.com/in/ophelie-ortal-15a29164/"><img className="img-fluid scale" src={linkedin_icon}></img></a></li>
      </ul>
    );
  }
}

export default Nav;
