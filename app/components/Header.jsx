import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import logo from '../images/honey_titre.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <IndexLink to="/"><img id="main-logo" className="img-responsive center-block" alt="logo" src={logo} width="400"></img></IndexLink>
            <div className="text-center">
              <h4>ILLUSTRATION</h4>
              <h4>GRAPHISME</h4>
              <p>
                «Bienvenue sur mon site ! Vous y trouverez mes projets universitaires, personnels ou professionnels qui forgent mon identité et mon univers.
                N'hésitez pas à me contacter et a aller voir mon CV en ligne pour en apprendre plus sur moi ! » H.
              </p>
            </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
