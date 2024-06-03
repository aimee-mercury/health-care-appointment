import React, { useState, useEffect } from 'react';
import Image from '../assets/pt2.jpg';
import './fed.css'; 

function Feedback() {
  const [borderColor, setBorderColor] = useState('red');

  useEffect(() => {
    const colors = ['red', 'darkblue', 'blue', 'yellow'];
    let index = 0;
    
    const interval = setInterval(() => {
      setBorderColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Animation for h2
  useEffect(() => {
    const animatedH2 = document.getElementById('animatedH2');
    let colorIndex = 0;
    const colors = ['rgb(27, 178, 243)', 'red'];

    function applyAnimation() {
      animatedH2.style.transform = 'scale(1.2) rotate(5deg)';
      animatedH2.style.opacity = '0';
      animatedH2.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
      setTimeout(() => {
        animatedH2.style.transform = 'scale(1) rotate(0deg)';
        animatedH2.style.opacity = '1';
      }, 500);
    }

    const animationInterval = setInterval(applyAnimation, 1550);
    return () => clearInterval(animationInterval);
  }, []);

  // Animation for form
  useEffect(() => {
    const form = document.getElementById('messageForm');
    form.style.animation = 'colorCycle 5s linear infinite'; 
  }, []);

  return (
    <section className="feedback" style={{ borderTopColor: borderColor, borderBottomColor: borderColor, borderRightColor: borderColor, borderLeftColor: borderColor }}>
      <h2 id="animatedH2">Our Patients' Feedback</h2>
      <div className="feedback-content">
        <div className="patient-info">
          <img src={Image} alt="Patient" />
          <p>- Anjali Sharma</p>
        </div>
        <blockquote>
          “MSFT Pro is a website and mobile app for you to feel better or get medical help. They offer you a 24/7 doctor service with a Medicine Purchasing Facility.”
        </blockquote>
      </div>
      <br />
      <br />
      <form id="messageForm">
        <h1>LEAVE MESSAGE HERE 📖</h1>
        <br />
        <br />
        NAMES:<br /><br />
        <input type="text" id="nameInput" placeholder="Your full name" style={{ width: '400px', height: '30px', color: 'black', padding: '10px' }} required /><br /><br />
        EMAIL:<br /><br />
        <input type="text" id="emailInput" placeholder="Your email" style={{ width: '400px', height: '30px', color: 'black', padding: '10px' }} required /><br /><br />
        Message:<br /><br />
        <input type="text" id="messageInput" placeholder="Enter your message ...." style={{ width: '400px', height: '100px', color: 'black', padding: '10px' }} required />
        <br />
        <br />
        <button style={{ border: 'none', color: 'white', backgroundColor: 'darkblue', marginLeft: '100px', color: '#fefbfb', padding: '10px', borderRadius: '15px' }} id="sendButton">SEND</button>
      </form>
    </section>
  );
}

export default Feedback;
