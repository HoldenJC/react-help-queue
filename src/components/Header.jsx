import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/queue-logo.png';

function Header() {
  var headerStyles = {
    width: '200px'
  };
  return (
    <div>
      <img style={headerStyles} src={logo}/>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;