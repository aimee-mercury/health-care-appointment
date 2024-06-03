import React, { useState } from 'react'
// import Sidebar from './Dashboardd/Sidebar'
import Home from './Home'
import Headersidebar from './Headersidebar'

function Dash() {
  return (
    <div className='dashboard-first-page'>
      <Headersidebar/>
      <Home />
    </div>
  )
}

export default Dash
