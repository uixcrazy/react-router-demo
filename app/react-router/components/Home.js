import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/react-router/about" activeClassName="active">About</Link></li>
          <li><Link to="/react-router/contact" activeClassName="active">Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
