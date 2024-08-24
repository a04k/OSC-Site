import { useEffect } from 'react';
import Navbar from './Components/nav';
import Footer from './Components/footer';
import Bg from './Components/bg';
import './assets/stylesheets/index.scss';

const Layout = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.scroll-to-top');
      if (window.scrollY > 100) { 
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
    </div>
  );
};

export default Layout;
