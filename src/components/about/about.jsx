import React from "react";
import "./about.css";
import ME from "../../assets/saya1.png";
import { Slide } from "react-awesome-reveal"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <Slide direction="left" duration={2000}>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        </Slide>
        <Slide direction="right" duration={2000}>
        <div className="about__content">

          <p>
          I am a final year undergraduate student (S1) and have completed a Thesis trial at the University of Bina Sarana Informatika majoring in Information Systems. Previously graduated Diploma III (D3) in 2019. I am very enthusiastic about new and challenging things, easy to adapt to new environments and people and can work as a team or individually
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;
