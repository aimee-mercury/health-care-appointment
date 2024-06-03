import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import image from '../assets/logo.png';
import './lg.css';
import Navigation from '../components/Navigation';
import Footer from '../Footer/Footer';

const Logen = () => {
  const [borderColor, setBorderColor] = useState('red');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const colors = ['red', 'darkblue', 'blue', 'yellow'];
    let index = 0;
    
    const interval = setInterval(() => {
      setBorderColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Placeholder for actual login logic
    if (username === 'user' && password === 'pass') {
      navigate('/H'); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navigation />
      <div className="login-container">
        <img id="im" src={image} alt="Logo" />
        <form className="login-form" onSubmit={handleSubmit} style={{ borderColor: borderColor }}>
          <h2>Login to continue on our website</h2>
          {error && <p className="error">{error}</p>}
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
      <Footer />
    </>
  );
};

export default Logen;
