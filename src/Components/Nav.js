// src/Components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
