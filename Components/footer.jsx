import CityTime from './clock';
import '../assets/stylesheets/footer.scss'

export default function Footer () {
  return (
  <div className='footer'>
    {/* <div className='footerIcons'>
    </div> */}
    <div className='time'><CityTime/></div>
    <p>OSC Web Team 📦🚀 2024</p>
  </div>
  );
}

