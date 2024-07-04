import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Homepage from './components/Homepage';

function App() {


  const [page ,setPage] =useState(1)
  return (
    <div className='overflow-y-auto'>
  { page===1 ? ( <Hero setPage={setPage}/>):(
     <Homepage/>)}
    </div>
   
   
    
    
  );
}

export default App;
