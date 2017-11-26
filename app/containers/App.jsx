import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Nav from '../components/Nav';

class App extends Component {

  render(){
    const children = this.props.children;
    return (
      <div className="">
        <Header />
        <div className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
                {children}
            </div>
            <div className="column">
                <div className="container">
                  <Nav style="social-list is-hidden-mobile is-text-centered"/>
                </div>
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
