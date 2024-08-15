// src/layout.jsx
import React from 'react';
import Navbar from './Components/nav';
import Footer from './Components/footer';
import './assets/stylesheets/index.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header >
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <Footer/>
    </div >
  );
};

export default Layout;
