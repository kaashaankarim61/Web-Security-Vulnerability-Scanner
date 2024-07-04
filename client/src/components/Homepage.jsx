import React, { useState } from 'react'
import bgvid from '../assets/videoplayback.mp4'
import './styles.css'
import Hero from './Hero'
import Detector from './Detector'


function Homepage() {

    

  return (
    <div className='overflow-x-hidden'>
    <div className=' w-screen h-screen z-10 flex items-center justify-center flex-col'>
        <Detector/>
    </div>
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={bgvid} type="video/mp4" />
      </video>
    </div>
    </div>
    
  )
}

export default Homepage
