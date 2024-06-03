import React from 'react';
import './Footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Img from '../assets/logo.png'
function Footer() {
  return (
    <footer id='Footer' className="footer-container">
      <div className='sec'>
      <div className="footer-section">
        <img src={Img} alt="logo" id='im' />
        <p className="footer-description">
          Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.'
        </p>
      </div>

      <div className="footer-section">
        <h3>Overview</h3>
        <ul>
          <li>Medicines</li>
          <li>Healthcare Devices</li>
          <li>Health Progress</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li>Blogs & Feeds</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.instagram.com"><BsInstagram /></a>
          <a href="https://twitter.com/"><FaTwitter /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </div><br /><br /><br />
        <h4><a href="">KG 543 st 35</a></h4>
      </div>

      <div className="footer-line"></div>

      <div className="footer-copyright">
        <p>Copyright <LuCopyright /> Hospiclinic Pro 2023</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;