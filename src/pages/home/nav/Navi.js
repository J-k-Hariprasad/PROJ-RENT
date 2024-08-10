import './Navi.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import './Navi.css';

const Navi = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate=useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
    navigate('/profile')
    };

    const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);
  
  return (
    <nav className="navbar">
      <div className="navbar-title">Rent'N Roll</div>
      {isMobile ? (
        <div className="navbar-menu">
          <i className="fas fa-bars"></i>
          <div className="navbar-dropdown">
          <div className='ol'>
                <a href="/home">Home</a>
         
                <a href="/service">Services</a>
                <a href="/about">About</a>
                <a href="/jour">History</a>
        </div>
          </div>
        </div>
      ) : (
          <div className="navbar-items">
        <div className='ol'>
                <a href="/home">Home</a>
                <a href="/service">Services</a>
                <a href="/about">About</a>
                <a href="/jour">History</a>
        </div>
            <div>
                <div className='mbu'>
                    <Button onClick={handleProfileClick}><VscAccount /></Button>
                </div>
                <div>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
                    <MenuItem onClick={()=> navigate('/')}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navi;
