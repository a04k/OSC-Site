import { Link, useLocation } from 'react-router-dom';
import '../assets/stylesheets/nav.scss';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
  const location = useLocation();
  const currentLocation = location.pathname.toLowerCase();

  // Function to check if the current location is the home page
  const isHome = () => currentLocation === '/';
  
  
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="OSC Logo" />
        </Link>
      </div>
      <ul>
        {/* Conditionally render the "About" link based on whether we're on the home page */}
        {isHome() ? null : <li><Link to="/about">About</Link></li>}
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/committees">Committees</Link></li>
      </ul>
    </nav>
  );
}
