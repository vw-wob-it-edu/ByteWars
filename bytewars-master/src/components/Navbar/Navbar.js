import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and import the CSS file

function Navbar() {
  const location = useLocation(); // Hook to get the current path

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-byte">Byte</span><span className="logo-wars">Wars</span>
      </Link>

      <div className="navbar-center">
        <Link to="/coding" className={`coding-button ${location.pathname === '/coding' || location.pathname === '/practice'|| location.pathname === '/singleplayer'? 'active' : ''}`}>Coding</Link>
      </div>

      <div className="navbar-right">
        <Link to="/leaderboard" className={`right-button ${location.pathname === '/leaderboard' ? 'active' : ''}`}>Leaderboard</Link>
        <Link to="/auth" className={`right-button ${location.pathname === '/auth' || location.pathname === '/sign-up' ? 'active' : ''}`}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
