import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { Slide } from "react-awesome-reveal"

const services = () => {
  return (
    <section id="services">
      {/* <h5>What i Offer</h5> */}
      <h2>My Soft Skills</h2>

      <div className="container services__container">
      <Slide direction="left" duration={2000}>
        <article className="service">
          <div className="service__head">
            <h3>Personality</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        </Slide>

        {/* Akhir UI/UX */}

        <Slide direction="right" duration={2000}>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        </Slide>

        {/* Akhir Web Development */}
      </div>
    </section>
  );
};

export default services;
