import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SideBar from '../../components/Admin/Sidebar';
import NavBar from '../../components/Admin/Navbar';

class App extends Component {

  render(){
    const children = this.props.children;

    return (
      <div className="">
        <NavBar />
          <div className="section hero is-fullheight is-light">
            <div className="container">
              {/* <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
                  <SideBar />
                </div> */}
                  {children}
            </div>
          </div>
        <footer className="container">
            <p className="text-right small">©2016-2017 Company</p>
        </footer>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
