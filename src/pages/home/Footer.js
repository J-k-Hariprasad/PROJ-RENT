import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome if not done globally
import './Footer.css';

const Footer = ({ id }) => {
  return (
    <footer className="footer" id={'id'}>
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
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
          <i className="fab fa-linkedin-in"></i>
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
