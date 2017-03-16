import React, { Component } from 'react';
import {Link} from 'react-router';
const myArray = {
  'users': [
    {'name': 'Lucas'},
    {'name':'David'}]
  };


  class Home extends Component {
    render(){
      var posts = myArray.users.map((user, index) => <li key={index}><Link to="/post/1">{user.name}</Link></li>);

      return (
        <div>
          <ul>{ posts }</ul>
        </div>
      );
    }
  }

  export default Home;
