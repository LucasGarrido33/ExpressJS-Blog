 import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Nav from '../components/Nav';

class App extends Component {

  render(){
    const children = this.props.children;

    return (
      <div className="container-fluid">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              {children}
            </div>
            <div className="social-list col-md-2">
              <Nav />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
