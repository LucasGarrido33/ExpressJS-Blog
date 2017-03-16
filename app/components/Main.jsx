import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';


class Main extends Component {

  render(){
    return (
      <div className="container-fluid">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              {this.props.children}
            </div>
            <div className="social-list col">
              <Nav />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Main;
