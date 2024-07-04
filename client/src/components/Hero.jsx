import React from 'react'
import bgvid from '../assets/videoplayback.mp4'
import './styles.css'
function Hero(props) {
  return (
    <div className='overflow-x-hidden flex justify-center items-center flex-col'>
    <div className='flex flex-col z-10 absolute justify-center items-center bg-black bg-opacity-90 w-[700px] px-20 py-10 h-auto rounded-xl top-[150px]'>
        <h1 className='text-white text-5xl font-bold'>Web Vulnerability Scanner</h1>
        <ul className='text-white text-lg mt-7'>
          <li>
         
          <p><b className='font-bold'>CSRF : </b>CSRF, or Cross-Site Request Forgery, is a type of cyber attack where unauthorize user exploit the user's active session. </p>
          </li>
          
          <li className='mt-5'> 
          <p> <b className='font-bold'>XSS : </b>Cross-Site Scripting (XSS) is a cyber threat where attackers inject malicious scripts into web pages </p>
          </li>
          

          <li  className='mt-5'>
        
          <p><b className='font-bold'>SQLI : </b>SQL injection (SQLi) is a cybersecurity vulnerability allowing malicious actors to manipulate or inject SQL code into input fields.  </p>
          </li>
          
          </ul>
        <button className='mt-10 bg-white w-[500px] h-[40px] hover:bg-[#36517c] hover:border-white hover:border-2 hover:text-white hover:scale-105 ease-in-out duration-100' onClick={()=>{
            props.setPage(0)
        }}> Lets Go</button>

    </div>
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={bgvid} type="video/mp4" />
      </video>
    </div>
    </div>
  )
}

export default Hero
