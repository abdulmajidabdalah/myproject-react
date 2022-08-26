import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projek1.png";
import IMG2 from "../../assets/projek2.png";
import IMG3 from "../../assets/projek3.png";
import IMG4 from "../../assets/projek4.png";
import IMG5 from "../../assets/projek5.jpg";
import IMG6 from "../../assets/projek6.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my dummy website using HTML, CSS, Bootstrap</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="https://abdulmajidabdalah.github.io/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is real website using HTML, CSS, Bootstrap</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="http://bit.ly/3HDcYOB" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is my dummy website using HTML, CSS, Materialize</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="https://abdulmajidabdalah.github.io/mybio/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is my dummy website using HTML, CSS, Javascript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="https://abdulmajidabdalah.github.io/fbkw/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a Calculator Website Using HTML CSS and Javascript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="https://abdulmajidabdalah.github.io/calculator/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio Website using Framework Bootstrap</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/abdulmajidabdalah" className="btn" target="_blank">
              Github
            </a>
            <a href="https://abdulmajidabdalah.github.io/portofolio/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
