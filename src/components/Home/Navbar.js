import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
      <h1>Data Storage</h1>
      <div className="links">
        <NavLink exact to="/AllSubmission" activeClassName="nav-active">All Submission</NavLink>
        <NavLink exact to="/NewSubmission" activeClassName="nav-active"> New Submission</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
