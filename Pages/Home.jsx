import React from 'react'
import { useState } from 'react'

const Home = () => {

const [message, setMessage] = useState()

  return (
    <>

      <div className=''>
        <div>

          <div className='relative bg-red-400 h-12 w-[90%] rounded-3xl'></div>
          <label htmlFor="">
            <input
            
            type="text"
            />
          </label>
        </div>

      </div>
    </>
  )
}

export default Home