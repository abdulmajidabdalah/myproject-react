import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/abdu-majid-abdalah-8a11391b0/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/abdulmajidabdalah" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.upwork.com/freelancers/~01d28f9c0c6170cf6b" target="_blank">
        <SiUpwork />
      </a>
    </div>
  );
};

export default HeaderSocials;
