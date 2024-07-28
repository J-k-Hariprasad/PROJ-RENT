import React from "react";
import { Link } from "react-router-dom";
import './Top.css'; // Make sure to have the CSS file for styling

const Top = () => {
  return (
    <nav className="sticky-navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="navbar-title">FlexiFit</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Top;