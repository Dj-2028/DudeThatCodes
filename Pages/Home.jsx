import React from 'react'
import { useState } from 'react'
import MobileSection from '../Components/MobileSection'
import Solutions from '../Components/Solutions'
import HeroSection from '../Components/HeroSection'

const Home = () => {


  return (
    <>
      <div className='bg-[#00111F] pt-[2.5vh]'>
        <HeroSection />
        <MobileSection />
        <div className='p-20' >

          <Solutions />
        </div>

      </div>
    </>
  )
}

export default Home