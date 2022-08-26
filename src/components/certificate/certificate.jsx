import React from "react";
import "./certificate.css";
import SK1 from "../../assets/sk1.jpg";
import SK2 from "../../assets/sk2.jpg";
import SK3 from "../../assets/sk3.jpg";
import SK4 from "../../assets/sk4.jpg";
import SK5 from "../../assets/sk5.jpg";
import SK6 from "../../assets/sk6.jpg";
import { Fade } from "react-awesome-reveal"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonial = () => {
  return (
    <section id="certificate">
      <h5>See my certificate</h5>
      <h2>Certificate</h2>

      <Fade direction="in" delay={800}>
      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK1} alt="Avatar satu" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK2} alt="Avatar satu" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK3} alt="Avatar satu" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK4} alt="Avatar satu" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK5} alt="Avatar satu" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={SK6} alt="Avatar satu" />
          </div>
        </SwiperSlide>
      </Swiper>
      </Fade>
    </section>
  );
};

export default testimonial;
