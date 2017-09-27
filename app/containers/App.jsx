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
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
                {children}
            </div>

            <div className="col-md-1">
              <div className="social-list hidden-xs">
                <Nav style="list-unstyled"/>
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
