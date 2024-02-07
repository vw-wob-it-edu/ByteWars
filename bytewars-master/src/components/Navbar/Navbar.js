import React from 'react';
import './Navbar.css';
 
function Navbar() {
  // Function to check if a link is active
  const isActive = (path) => {
    return window.location.pathname === path;
  };
 
  return (
    <nav>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-byte">Byte</span><span className="logo-wars">Wars</span>
        </a>
        <ul className="navbar-coding">
        <li className="navbar-item no-bullet">
              <a href="/" className={`navbar-links ${isActive('/') ? 'active' : ''}`}>
              &lt;Coding Area/&gt;
              </a>
            </li>
          </ul>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className={`navbar-links ${isActive('/') ? 'active' : ''}`}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/practice" className={`navbar-links ${isActive('/practice') ? 'active' : ''}`}>
              Practice
            </a>
          </li>
          <li className="navbar-item">
            <a href="#services" className={`navbar-links ${isActive('#services') ? 'active' : ''}`}>
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="/auth" className={`navbar-links ${isActive('/auth') ? 'active' : ''}`}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;