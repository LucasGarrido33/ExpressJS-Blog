import React, { Component } from 'react';
import SideBar from '../../components/Admin/Sidebar';
import NavBar from '../../components/Admin/Navbar';

class App extends Component {

  render(){
    return (
      <div>
        <NavBar />
      <div className="container-fluid">
        <div className="row row-offcanvas row-offcanvas-left">
          <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
              <SideBar />
            </div>
            <div className="col-md-9 col-lg-10 main">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="container-fluid">
            <p className="text-right small">©2016-2017 Company</p>
        </footer>
      </div>

    );
  }
}

App.propTypes = {
  children: App.element.isRequired
};

export default App;
