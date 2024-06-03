import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './Book.css'
import './Dashboard.css'

function Headersidebar() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='dashboard-sidebar-header'>
       <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
  )
}

export default Headersidebar
