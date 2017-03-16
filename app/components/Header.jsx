import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../images/honey_titre.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <Link to="/"><img id="main-logo" className="img-fluid mx-auto d-block" alt="logo" src={logo} width="400"></img></Link>
            <div className="text-center">
              <h4>ILLUSTRATION</h4>
              <h4>GRAPHISME</h4>
              <p className="font-weight-bold">
                «Bienvenue sur mon site ! Vous y trouverez mes projets universitaires, personnels ou professionnels qui forgent mon identité et mon univers.
                N'hésitez pas à me contacter et a aller voir mon CV en ligne pour en apprendre plus sur moi ! » H.
              </p>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
        </div>
      </header>
    );
  }
}


export default Header;
