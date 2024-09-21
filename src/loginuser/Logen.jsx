import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import image from '../assets/logo.png';  // Ensure the path to the logo image is correct
import './lg.css';  // Check if lg.css exists and is correctly applied
import Navigation from '../components/Navigation';  // Ensure this path is correct
import Footer from '../Footer/Footer';  // Ensure this path is correct

const Logen = () => {
  const [borderColor, setBorderColor] = useState('red');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Border color change animation
  useEffect(() => {
    const colors = ['red', 'darkblue', 'blue', 'yellow'];
    let index = 0;
    
    const interval = setInterval(() => {
      setBorderColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Basic username and password check (replace with actual authentication)
    if (username === 'user' && password === 'pass') {
      navigate('/H');  // Change this route to the actual one for your app
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navigation />  {/* Ensure this component renders correctly */}
      <div className="login-container">
        <img id="im" src={image} alt="Logo" />
        <form className="login-form" onSubmit={handleSubmit} style={{ borderColor: borderColor }}>
          <h2>Login to continue on our website</h2>
          {error && <p className="error">{error}</p>}  {/* Display error if any */}
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />  {/* Ensure Footer component renders correctly */}
    </>
  );
};

export default Logen;
