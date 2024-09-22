import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import logo from'../assets/Logo/tg_sneakers_logo.png';
  function Header() {
    return (
      <header>
        <img src={logo} alt="TG_Sneakers Logo" className="logo" />
        <SearchBar /> {/* Add the SearchBar component here */}
        <nav className="nav-links">
          <ul>
            <li><a href="#brand">Brand</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;