// import { useEffect , useState } from 'react';
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./assets/stylesheets/home.scss";
// import Arrow from "../src/assets/images/arrow.svg";

export default function Home() {
  const [text1] = useTypewriter({
    words: [`Open Source Community`],
    typeSpeed: 30,
  });

  const handleScroll = () => {
    const secTwo = document.getElementById("about");
    secTwo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home">
      <div className="hero">
        <h1 id="osctxt">
          <span className="OSCText">{text1}</span>
          <span id="cursor">
            <Cursor />
          </span>
        </h1>
        <div className="more" onClick={handleScroll}>
          <h3>
            MORE <span className="arrow">-&gt;</span>
          </h3>
        </div>
      </div>
      <div className="About" id="about">
        <h1>About Us</h1>
        <p>
          We are a student activity founded on December 5th 2013 and located in
          Ain Shams University Faculty of Computer and Information Science. We
          live by our motto &quot;Don&apos;t Reinvent The Wheel&quot;. We promote the
          philosophy of free software. We believe that knowledge and technology
          do not belong to a person or a group of people, and we believe that
          they must be open and available for everybody to use, study,
          contribute, modify and share. We provide a suitable environment for
          students to create, and contribute to open source projects. We also
          create artwork and animations using free software. We help students
          create and manage open source projects. We provide workshops to
          develop skills and dealing with open source software therein. Like
          creating 3D computer graphics with Blender and Linux system
          adminstration and networking. We have a place for everyone. We have a
          number of{" "}
          <a>
            <Link to="/Committees">committees</Link>
          </a>{" "}
          with a variety of ventures.
        </p>
      </div>
    </main>
  );
}
