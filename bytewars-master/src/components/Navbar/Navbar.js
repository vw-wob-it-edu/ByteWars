import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
      <a href="#home" className="navbar-logo">
  <span className="logo-byte">Byte</span><span className="logo-wars">Wars</span>
</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/" className="navbar-links">Home</a></li>
          <li className="navbar-item"><a href="/practice" className="navbar-links">Practice</a></li>
          <li className="navbar-item"><a href="#services" className="navbar-links">Services</a></li>
          <li className="navbar-item"><a href="/auth" className="navbar-links">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
