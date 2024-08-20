import { Link, useLocation } from 'react-router-dom';
import '../assets/stylesheets/nav.scss';
import logo from '../assets/images/logo.svg';
import fb from '../assets/images/fb.svg';
import gh from '../assets/images/github.svg';
import li from '../assets/images/linkedin.svg';

export default function Navbar() {
  const location = useLocation();
  const currentLocation = location.pathname.toLowerCase();

  // Function to check if the current location is the home page
  const isHome = () => currentLocation === '/';
  
  const handleScroll = () => {
    const secTwo = document.getElementById('about');
    secTwo.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="OSC Logo" />
        </Link>
      </div>
      <ul>
        {/* Conditionally change the "About" link function based on whether we're on the home page */}
        {isHome() ? <li onClick={handleScroll}><a>About</a></li > : <li><Link to="/about">About</Link></li>}
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/committees">Committees</Link></li>
      </ul>
      <div className='socials'>
        <a href="https://github.com/Open-Source-Community" target= "_blank"><img src={gh} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/company/osc---open-source-community/" target= "_blank"><img src={li} alt="LinkedIn" /></a>
        <a href="https://www.facebook.com/oscgeeks" target= "_blank"><img src={fb} alt="Facebook" /></a>
      </div>
    </nav>
  );
}
