import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-brand">Rent'N Roll</div>
        <div className="footer-copyright">Copyright © 2024 Rent'N Roll, Inc.</div>
        <div className="footer-links">
          <a href="/legal">Legal Stuff</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/security">Security</a>
          <a href="/accessibility">Website Accessibility</a>
          <a href="/cookies">Manage Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
