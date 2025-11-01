import React from 'react'
import { useState } from 'react'
import MobileSection from '../Components/MobileSection'
import Solutions from '../Components/Solutions'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {


  return (
    <>

      <div className='bg-[#00111F]'>
        <Navbar />
        <HeroSection />
        <MobileSection />

        <div className='p-20' >
          <Solutions />
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Home