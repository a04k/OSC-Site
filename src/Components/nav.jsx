import {Link} from 'react-router-dom';
import '../assets/stylesheets/nav.scss';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
  
  // const location = useLocation();

  // const getLocation = () => {
  //   const currentLocation = location.pathname.toLowerCase();
  //   if (currentLocation === '/blog') {
  //     return '.blog';
  //   } else if (currentLocation === '/committees') {
  //     return '.committees';
  //   } else if (currentLocation === '/about') {
  //     return '.about';
  //   } else {
  //     return '.dev';
  //   }
  // };

  // const [divStyle, setDivStyle] = useState({
  //   display: 'none',
  // });

  // const handleClick = () => {
  //   setDivStyle((prevStyle) => ({
  //     display: prevStyle.display === 'none' ? 'block' : 'none',
  //   }));
  // };

  // const handleScroll = () => {
  //   const secTwo = document.getElementById('about');
  //   secTwo.style.display ='flex';
  //   secTwo.scrollIntoView({ behavior: 'smooth' }); 
  // };

  return (
    <div>
      <nav>
        <div className="logo"> {/*didnt use the class for the logo directly incase i add txt*/}
          <a>
          <Link to ="/">
          <img src={logo} alt="OSC Logo" />
          </Link>
          </a>
        </div>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/committees">Committees</Link></li>
        </ul>
      </nav>
    </div>
  );
}
