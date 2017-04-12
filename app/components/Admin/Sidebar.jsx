import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
  render(){
    return (
      <div>
        <ul className="nav flex-column pl-1">
            <li className="nav-item"><Link to="/admin" className="nav-link">Index</Link></li>
            <li className="nav-item"><Link to="/admin/posts" className="nav-link">Posts</Link></li>
            <li className="nav-item"><Link to="/admin/post/create" className="nav-link">New Post</Link></li>
            <li className="nav-item"><Link to="/admin/categories" className="nav-link">Categories</Link></li>
            <li className="nav-item"><Link to="/admin/category/create" className="nav-link">New category</Link></li>

        </ul>
      </div>
    );
  }
}

export default SideBar;
