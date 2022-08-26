import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/saya.png";
import HeaderSocials from "./HeaderSocials";
import { Fade } from "react-awesome-reveal";
import TypeAnimation from 'react-type-animation';



const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Abdul Majid Abdalah</h2>
        <TypeAnimation className="text-light"
        cursor={true}
        sequence={[
          'Junior Front End Developer',
          2000,
          'Web Developer',
          2000,
        ]}
        wrapper="h5"
        repeat={5}
       />
        <CTA />
        <HeaderSocials />

        <Fade delay={500} className="me">
          <img src={Me} alt="me" />
        </Fade>

        <a href="#contact" className="scrol__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
