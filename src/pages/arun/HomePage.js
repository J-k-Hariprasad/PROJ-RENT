import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <a href="#">Apartments</a>
          <a href="#">Individual House</a>
          <a href="#">Land / Plots</a>
          <a href="#">Ongoing Projects</a>
          <a href="#">Blog</a>
          <a href="#">Login</a>
          <button className="sell-rent-button">+ Sell / Rent your Property</button>
        </nav>
      </header>
      <div className="hero">
        <h1>COIMBATORE PROPERTY</h1>
        <p>Your coimbatore real estate online destination to search, Buy, Rent and Sell Property in coimbatore.</p>
        <div className="search-container">
          <div className="search-toggle">
            <button className="buy-button active">Buy</button>
            <button className="rent-button">Rent</button>
          </div>
          <div className="search-form">
            <select className="property-type">
              <option>Property Type</option>
              {/* Add other options here */}
            </select>
            <input type="text" className="locality-input" placeholder="Search by locality" />
            <select className="bedroom-select">
              <option>Bedroom</option>
              {/* Add other options here */}
            </select>
            <button className="search-button">Search Properties</button>
          </div>
        </div>
        <div className="why-different">
          <div>Quick, Convenient and Easy to Use</div>
          <div>Verified Listings</div>
          <div>More Qualified Leads</div>
          <div>Cost Effective</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
