import React, { useState, useEffect } from 'react';
import './navigation.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navigation() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [navClass, setNavClass] = useState("nav");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  };

  const changeNavOnScroll = () => {
    if (window.scrollY >= 80) {
      setNavClass("nav nav__scrolled");
    } else {
      setNavClass("nav");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavOnScroll);
    return () => {
      window.removeEventListener("scroll", changeNavOnScroll);
    };
  }, []);

  return (
    <>
      <nav className={navClass}>
        <img src={logo} alt="" className='ai' />
        <ul className={active}>
          <li className="nav__item"><a href="/H" className='nav__link'>Healthcare</a></li>
          <li className="nav__item"><a href="#About" className='nav__link'>About Us</a></li>
          <li className="nav__item"><a href="#medical" className='nav__link'>Services and Medicine</a></li>
          <li className="nav__item"><a href='#Footer' className='nav__link'>Visit Us</a></li>
          <Link to='/login'><button className="appointment-button" id="me">Get Your Appointment</button></Link>
        </ul>
        <div className={toggleIcon} onClick={navToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
