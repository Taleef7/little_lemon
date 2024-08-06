// src/App.js
import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
