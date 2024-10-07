import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Sinup.css';
import image from '../assets/logo.png';
import Navigation from '../components/Navigation';
import Footer from '../Footer/Footer';

const RegisterForm = () => {
  const [borderColor, setBorderColor] = useState('red');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  // Change border color animation
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Remove any password checks or authentication logic
    setSuccess('Registration successful');
    setError('');
    
    setTimeout(() => navigate('/Log'), 2000); // Redirect to login page after 2 seconds
  };

  return (
    <>
      <Navigation />
      <div className="register-container">
        <img id="im" src={image} alt="Logo" />
        <form className="register-form" onSubmit={handleSubmit} style={{ borderColor: borderColor }}>
          <h2>Register</h2>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
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
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button><br /><br />
          <p>Already have an account? <Link to="/Log">Login</Link></p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
