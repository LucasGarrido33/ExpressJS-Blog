import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

class App extends Component {

  render(){
    return (
      <div className="container-fluid">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              {this.props.children}
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
  children: App.element.isRequired
};

export default App;
