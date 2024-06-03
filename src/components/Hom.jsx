import React from "react";
import "./home.css";
import ReactPlayer from 'react-player';
import Navigation from "./Navigation";
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
   const videoUrl = 'src/assets/about.mp4';

   const handleClick = () => {
     const shouldGoToSignIn = true;
 
     if (shouldGoToSignIn) {
       navigate('#about');
     } else {
       navigate('/signup');
     }
   };

  return (
    <>
      <div>
        <ReactPlayer
          url={videoUrl}
          playing
          muted={true}
          loop
          width="101%"
          height="140%"
          style={{ position: 'absolute', top: '0', left: '0' }}
        />
        <Navigation />
        <div className="ae"  data-aos="fade-up" data-aos-duration={2000}>
          <div className="landing-content">
            <h1 className="we">
              Welcome to hospital appointment space <br /> where you can <span>book</span>, <span>get</span>
               treatment <span>for</span> free <br /> <span>any</span>where you <span>are</span> in Rwanda.
            </h1>
            <p className="we1">Open every day we are here for you <br /><br /> Do you want to book an apointment ?<br /><br />
              <button onClick={handleClick} className="landing-letsget-btn">Let's get Started</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
