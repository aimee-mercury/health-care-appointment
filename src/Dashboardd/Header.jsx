import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import './Dashboard.css'

function Header({OpenSidebar}) {
  return (
    <header className='dash-header'>
        <div className='dash-menu-icon'>
            <BsJustify className='dashboard-icon-menu' onClick={OpenSidebar}/>
        </div>
        <div className='dash-header-left'>
            <BsSearch  className='dashboard-icon'/>
        </div>
        <div className='dash-header-right'>
            <BsFillBellFill className='dashboard-icon'/>
            <BsFillEnvelopeFill className='dashboard-icon'/>
            <BsPersonCircle className='dashboard-icon'/>
        </div>
    </header>
  )
}

export default Header
