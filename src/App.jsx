
import Hom from './components/Hom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import SinUp from './Sinupproject/sinup';
import Log from './loginuser/Logen';

import Login from './pointment/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Medical from './components/Medical';
import Home from './Home';
function App() {


  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<SinUp  />} />
          <Route path='/Log' element={<Log />} />
          <Route path='/H' element={<Home/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/Medical' element={<Medical />} />
          

        </Routes>
      </Router>

    </>
  );
}
export default App

