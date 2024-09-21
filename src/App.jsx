import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home'; // Ensure that 'Home' is the correct path
import About from './components/About'; // Correct paths for About
import SinUp from './Sinupproject/sinup'; // Ensure the path and filename match
import Log from './loginuser/Logen'; // Ensure the path and filename match
import Login from './pointment/Login'; // Ensure the path and filename match
import Medical from './components/Medical'; // Ensure the path and filename match

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<SinUp />} />
          <Route path='/Log' element={<Log />} />
          <Route path='/H' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/Medical' element={<Medical />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
