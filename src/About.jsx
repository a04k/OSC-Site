import { Link } from 'react-router-dom';
import './assets/stylesheets/home.scss';

export default function About() {
  return (
    <div className="About" id="about">
      <h1>About Us</h1>
      <h2>Who Are We?</h2>
      <p>
        We are a student activity founded on December 5th 2013 and located in Ain Shams University Faculty of Computer and Information Science. We live by our motto "Don't Reinvent The Wheel". We promote the philosophy of free software. We believe that knowledge and technology do not belong to a person or a group of people, and we believe that they must be open and available for everybody to use, study, contribute, modify and share. We provide a suitable environment for students to create, and contribute to open source projects. We also create artwork and animations using free software. We help students create and manage open source projects. We provide workshops to develop skills and dealing with open source software therein. Like creating 3D computer graphics with Blender and Linux system administration and networking. We have a place for everyone. We have a number of <Link to="/committees">committees</Link> with a variety of ventures.
      </p>
    </div>
  );
}
