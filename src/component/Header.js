import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="app-name">myIntegrity@Lilly</div>
      <div className="header-right">
        <button className="search-btn">Search</button>
        <select className="country-dropdown">
          <option value="">--Select--</option>
          <option value="IN">India</option>
          <option value="UK">United Kingdom</option>
          <option value="BZ">Brazil</option>
          <option value="SL">Srilanka</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
