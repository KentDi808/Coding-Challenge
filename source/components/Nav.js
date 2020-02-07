import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  return (
    <div className="nav-container">
      <div className="nav-item"><NavLink exact to="/mainview">Main</NavLink></div>
      <div className="nav-item"><NavLink exact to="/secondaryview">Secondary</NavLink></div>
    </div>
  );
}

export default Nav;
