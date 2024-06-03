import React from 'react';
import './medi.css';
import Feedback from './Feedback';
import Imag3 from '../assets/pill1.jpg';
import Imag from '../assets/pill2.jpg';


function Medical() {
  return (
    <div  id='medical'  class='app'>
      <header>
        <h1 id='kazu'>Shop for <span id='kk'>Medicines</span> & Wellness</h1>
      </header>

      <div className="content-container">
        <section className="content-wrapper">
          <section className="diabetics-care">
            <div className="programs">

              <div className="program">
                <h2>Diabetics Care Program</h2>
                <img id='im' src={Imag3} alt="Image 3" />
                <p>Healthcare helps people maintain good health and prevent illness. Regular check-ups, vaccinations, and screenings can catch health issues early and prevent them from becoming more serious.</p>
                <ul>
                  <li>Vitamins</li>
                  <li>Nutritional Drink</li>
                  <li>Skin Care</li>
                  <li>Wellness</li>
                </ul>
                <div className="cost-book">
                  <p>₹ 999/-</p>
                  <button>Book Now</button>
                </div>
              </div>

              <div className="program">
                <h2>Healthcare Programs</h2>
                <img id='im' src={Imag} alt="Image 3" />
                <p>Healthcare helps people maintain good health and prevent illness. Regular check-ups, vaccinations, and screenings can catch health issues early and prevent them from becoming more serious.</p>
                <ul>
                  <li>Complete Nutrition</li>
                  <li>Heart Care</li>
                  <li>Sexual Wellness</li>
                  <li>Diabetics Care</li>
                </ul>
                <div className="cost-book">
                  <p>₹ 999/-</p>
                  <button>Book Now</button>
                </div>
              </div>
             
            </div>
          </section>
        </section>
        
        <Feedback />
      </div>
    
    </div>
  );
}

export default Medical;
