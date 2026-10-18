import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
// import timer from '../time.js'
import we from "../weather.js"
const Bottombar = () => {
   const [loading,setloading] = useState(true)
 const [weather,Setweather] = useState({})


      



useEffect(() => {
  const fetchTime = async () => {
    try {
      const result = await we();
      // console.log(result);
      Setweather(result);
    } finally {
      setloading(false);
    }
  };

  fetchTime();

  const interval = setInterval(fetchTime, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div id='bo'>
       <div className="lft">
        <div className="logo">
          <img src='src\assets\react.svg' />

        </div>
        <div className="apps">
          

        </div>
       </div>
       <div className="rght">

        {/* <div className="timer">
        {loading ? <div className="loading">Loading</div>  : weather.data?.current.time} */}
           
          
        {/* </div> */}
        
 <div className="weather">
  {loading ? (
    `Loading weather...` ) : (
         <>
      <div>Time: {weather?.current?.time ?? 'N/A'}</div>
      <div>Temperature: {weather?.current?.temperature_2m ?? '--'}°C</div>
    </>
  )}
</div>

  
</div>
        
       </div>
 
  )
}

export default Bottombar