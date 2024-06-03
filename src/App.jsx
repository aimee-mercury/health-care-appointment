
import Hom from './components/Hom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import SinUp from './Sinupproject/sinup';
import Finance from './Dashboard/Finance'
import Settings from './Dashboard/Settings'
import Signout from './Dashboard/Signout'
import Members from './Dashboard/Members'
import Dashboard from './Dashboard/Dashboard';
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
          
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/members' element={<Members />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/signout' element={<Signout />} />

        </Routes>
      </Router>

    </>
  );
}
export default App

