import React from 'react';
import Footer from './Footer/Footer'; // Ensure correct path for Footer
import About from './components/About'; // Ensure correct path for About
import Hom from './components/Hom'; // Ensure correct path for Hom
import './HOME.css'; // Ensure correct path for CSS
import Medical from './components/Medical'; // Ensure correct path for Medical
import Signup from './Sinupproject/sinup'; // Ensure correct path for Signup

function Home() {
  return (
    <>
      <div className="home">
        <Hom />
        <About />
        <Medical />
        <Footer />
      </div>
    </>
  );
}

export default Home;
