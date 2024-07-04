import React, { useState, useTransition } from 'react'
import './alert.css'

function Detector() {

  const [state, SetState] = useState('hidden')
  const [msg, SetMsg]  =useState('CSRF DETECTED')

  const [url, setUrl] =useState("https://flexstudent.nu.edu.pk/")
  const [detected, setDetected] =useState('')
  const [name, setName] =useState("https://flexstudent.nu.edu.pk/")
  const [border, setBorder] =useState('border-[#36517c]')
  const handleClickSqli = () => {
    setDetected("Detecting .....")
    setBorder('border-yellow-500')

    // Define the URL
    const apiUrl = 'http://localhost:8080/sqli';

    // Request body containing the URL
    const requestBody = {
      url: url
    };

    // Making the GET request with fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody) // Convert the request body to JSON
    })
      .then(response => {
        // Handle the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log('Response:', data);
        setDetected(data.output)
        const substringExists = data.output.includes('--True');
        if (substringExists) {
            setBorder('border-red-500')
            SetState('flex')
            SetMsg('SQLI DETECTED')
        } else {
            setBorder('border-green-500')
            SetState('flex')
            SetMsg('SQLI NOT  DETECTED')
        }
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  };



  const handleClickXSS = () => {
    // Define the URL
    setDetected("Detecting .....")
    setBorder('border-yellow-500')
    const apiUrl = 'http://localhost:8080/xss';

    // Request body containing the URL
    const requestBody = {
      url: url
    };

    // Making the GET request with fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody) // Convert the request body to JSON
    })
      .then(response => {
        // Handle the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log('Response:', data);
        setDetected(data.output)
        const substringExists = data.output.includes('--True');
        if (substringExists) {
            setBorder('border-red-500')
            SetState('flex')
            SetMsg('XSS DETECTED')
      
        } else {
            setBorder('border-green-500')
            SetState('flex')
            SetMsg('XSS NOT DETECTED')
       
        }
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  };



  const handleClickCSRF= () => {
    // Define the URL
    setDetected("Detecting .....")
    setBorder('border-yellow-500')
    const apiUrl = 'http://localhost:8080/csrf';

    // Request body containing the URL
    const requestBody = {
      url: url
    };

    // Making the GET request with fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody) // Convert the request body to JSON
    })
      .then(response => {
        // Handle the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log('Response:', data);
        setDetected(data.output)
        const substringExists = data.output.includes('--True');
        if (substringExists) {
            setBorder('border-red-500')
            SetState('flex')
            SetMsg('CSRF DETECTED')
      
        } else {
            setBorder('border-green-500')
            SetState('flex')
            SetMsg('CSRF NOT DETECTED')
       
        }
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  };


  return (
    <div className='bg-[#0b254d] bg-opacity-95 py-20  w-screen h-screen  z-20 p-5 shadow-xl overflow-hidden flex flex-row justify-center items-center'>
        
    <div className='flex flex-col justify-center w-[45%] h-full items-center p-2'>
    <h1 className='font-bold text-3xl text-white'>Preview</h1>
     <h1 className='text-gray-200 text-md w-[75%] px-5 py-1 mt-3  border-[#36517c] border-2 bg-black bg-opacity-20'>
    {name}
     </h1>
    <iframe 
      src={name}
      frameborder="0"
      className='w-[75%] h-[65%] object-cover mt-3  shadow-2xl'       
      >
     </iframe>

    </div>
  
  
  
    <div className='flex flex-col justify-center w-[55%] px-10 h-full items-center p-2 '>
        <h1 className='font-bold text-3xl text-white'>Vulenrability Scanner</h1>

        <div className='flex flex-row justify-center items-center w-full'>
        <input onChange={(e)=>{setUrl(e.target.value)}} type="text"  value={url} className='text-gray-200 text-xl w-[87%] px-5 py-1 mt-3 border-[#36517c] border-2 bg-black bg-opacity-40' placeholder='Enter Url' 
        
        
        />
        <button className='text-gray-200 text-[10px] ml-1 w-[37px] h-[37px] p-2 mt-3 border-[#36517c] border-2 bg-black bg-opacity-40 hover:bg-cyan-600 hover:text-black' onClick={()=>{
            setName(url)
        }}> GO </button>

        </div>
       
        
      
        <div className='flex flex-row flex-wrap justify-center items-center'>
            <button onClick={handleClickCSRF} className='text-gray-200 text-md w-[290px] h-[120px] px-4 py-1  mt-3 border-[#36517c] border-2 bg-black bg-opacity-40 hover:border-white hover:scale-110 ease-in-out duration-75' >
            <h1 className='text-white text-3xl font-bold'>
                CSRF
            </h1>
            <p className='text-sm text-center mt-1 '>CSRF, or Cross-Site Request Forgery  </p>
            </button>
            <button onClick={handleClickSqli} className='text-gray-200 text-md w-[290px] ml-3 h-[120px] px-4 py-1  mt-3 border-[#36517c] border-2 bg-black bg-opacity-40 hover:border-white hover:scale-110 ease-in-out duration-75'  >
            <h1 className='text-white text-3xl font-bold'>
                SQLI
            </h1>
            <p className='text-sm text-center mt-1 '>
             Structured Query Langugae injection  </p>
            </button>
            <button onClick={handleClickXSS} className='text-gray-200 text-md w-[290px] ml-3 h-[120px] px-4 py-1  mt-3 border-[#36517c] border-2 bg-black bg-opacity-40 hover:border-white hover:scale-110 ease-in-out duration-75' >
            <h1 className='text-white text-3xl font-bold'>
               XSS
            </h1>
            <p className='text-sm text-center mt-1 '>Cross-Site Scripting </p>
            </button>
        </div>

        <div className={`text-gray-200 overflow-y-auto flex flex-wrap text-xl w-[92%] h-[250px] px-5 py-1  mt-3 ${border} border-4 bg-black bg-opacity-40`}>
        <p className='whitespace-normal break-words'>
        {detected}
        </p>
        </div>
      
      
        

    </div>
    <div className={`${state} flex flex-row items-center justify-between gap-4 absolute mx-auto top-10 w-[450px] h-[70px]  border-[#36517c] border-2 bg-black bg-opacity-40 p-10 rounded-lg text-center`} >
      <p className='text-white'>{msg}</p>
      <button className='text-white font-bolf text-2xl hover:text-red-500' onClick={()=>{SetState('hidden')}}>X</button>
     
    </div>

 </div>
  )
}

export default Detector
