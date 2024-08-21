import React from 'react';
import Navbar from './Components/nav';
import Footer from './Components/footer';
import Bg from './Components/bg';
import './assets/stylesheets/index.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Bg />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;