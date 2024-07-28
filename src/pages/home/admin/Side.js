import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Side.css'; // Import the CSS file for the sidebar

const Side = () => {
  

  return (
    <div className="sidebar">
      <h2>Rent'N Roll</h2>
      <ul>
        <li>
          <NavLink exact to="/dashboard" activeClassName="active-link">
            Cars
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" activeClassName="active-link">
            Location
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="active-link">
           Home
          </NavLink>
        </li>
      </ul>
      

    </div>
  );
};

export default Side;