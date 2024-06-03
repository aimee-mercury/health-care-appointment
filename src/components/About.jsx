import React, { useEffect, useState } from 'react';
import Image from '../assets/doct2.jpg';
import Image2 from '../assets/doct4.jpg';
import Nextb from './nextb';
import Medical from './Medical'
import Image4 from '../assets/doct6.jpg';
import Image5 from '../assets/doct7.jpg';
import Image6 from '../assets/doct3.jpg';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowForward } from 'react-icons/io';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  const [categoriesCount, setCategoriesCount] = useState(1);
  const [productsCount, setProductsCount] = useState(1);
  const [booksCount, setBooksCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const numberContainer = document.querySelector('.number-container');
      const scrollPosition = window.scrollY + window.innerHeight;

      if (numberContainer.offsetTop < scrollPosition) {
       
        setCategoriesCount((prevCount) => (prevCount >= 100 ? 100 : prevCount + 2));
        setProductsCount((prevCount) => (prevCount >= 10000 ? 10000 : prevCount + 6));
        setBooksCount((prevCount) => (prevCount >= 50000 ? 50000 : prevCount + 3));
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className='about-container' data-aos="faded-up" >
 <div className='about' id='About'>
<h1>Top Rated <span id='h'>Doctors</span> Near You </h1>

</div>

<div className='number-container'>
        <div className='number'>
          <b>Hospitals</b>
          <br />
          <br />
          {categoriesCount}+
        </div>
        <div className='number'>
          <b>Patient</b>
          <br />
          <br />
          {productsCount}+
        </div>
        <div className='number'>
          <b>Doctors</b>
          <br />
          <br />
          {booksCount}+
        </div>
      </div>

<div className='next'>
 <p>Welcome to Wisdom Library,A haven for knowledge seekers and a vibrant hub for the community.Our library stands as a testament to the transformative power of literature and learning. Immerse yourself in a curated collection of books,multimedia resources, and digital archives that cater to diverse interests and intellectual pursuits.</p>   
</div>
<div className='mission' id='Mission'>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image} alt='Image 2' />
    </div>
    <div className='text'>
    <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
st joseph clinic
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image2} alt='Image 2' />
    </div>
    <div className='text'>
      <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
        Doctor marthin 
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image5} alt='Image 2' />
    </div>
    <div className='text'>
    <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
        Doctor francine
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image6} alt='Image 2' />
    </div>
    <div className='text'>
    <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
        Doctor marthe
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image4} alt='Image 2' />
    </div>
    <div className='text'>
    <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
        Doctor Aime
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
  <div className='card1'>
    <div className="phone-image">
      <img src={Image5} alt='Image 2' />
    </div>
    <div className='text'>
    <h2>Mission and Values</h2>
      <p>
        in our hospital, our mission is to take care of large community by providing access to all patients and
        resources to meet their doctor.
      </p>
      <b>
        Doctor marcelin
      </b>
      <div className="tick-icon"></div>
    </div>
  </div>
</div>
<Nextb/>

    </div>
</>
  )
}

export default About
