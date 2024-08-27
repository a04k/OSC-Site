import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../assets/stylesheets/nav.scss';
import logo from '../assets/images/logo.svg';
import fb from '../assets/images/fb.svg';
import gh from '../assets/images/github.svg';
import li from '../assets/images/linkedin.svg';

export default function Navbar() {
  const location = useLocation();
  const currentLocation = location.pathname.toLowerCase();
  const [scrolled, setScrolled] = useState(false);

  const isHome = () => currentLocation === '/';
  
  const handleScroll = () => {
    const secTwo = document.getElementById('about');
    secTwo.scrollIntoView({ behavior: 'smooth' }); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.015;
      const isScrolled = window.scrollY > scrollThreshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="OSC Logo" />
          </Link>
        </div>
        <ul>
          {isHome() ? (
            <li onClick={handleScroll}>
              <a>About</a>
            </li>
          ) : (
            <li>
              <Link to="/about">About</Link>
            </li>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/committees">Committees</Link>
          </li>
        </ul>
        <div className="socials">
          <a
            href="https://github.com/Open-Source-Community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gh} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/company/osc---open-source-community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={li} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/oscgeeks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
        </div>
      </div>
    </nav>
  );
  
}