import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">Abdul Majid Abdalah</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://web.facebook.com/abdul.m.abdalah" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/abdulmajidabdalah_/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/abdulmajida27" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdul Majid Abdalah 2022. All right reserved</small>
      </div>
    </footer>
  ) 
};

export default Footer;
