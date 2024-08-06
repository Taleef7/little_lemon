// src/Header.js
import React from 'react';
import logo from '../icons_assets/Logo.svg'; // Make sure you have the logo image in the src folder

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
