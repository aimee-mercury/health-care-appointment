import React from 'react'
import Footer from './Footer/Footer'
import About from './components/About'
import Hom from './components/Hom'
import './HOME.css'
import Medical from './components/Medical'
import Signup from './Sinupproject/sinup'


function Home() {
  return (
    <>
    <div className='home'>
    <Hom/>
    <About/>
    <Medical/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
