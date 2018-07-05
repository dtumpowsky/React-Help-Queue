import React from 'react';
import { Link } from 'react-router-dom';
import helpIcon from '../assets/images/help-icon.png';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/admin">Admin</Link>
      <img src={helpIcon}/>
    </div>
  );
}

export default Header;
