import React, { useState } from 'react'
import './App.css'
import Walpaper from "./assets/bg.jpg"
import Bottombar from './bottombar'
import Dragable from './dragable'
import browser from "./assets/browser.png"
import { Rnd } from 'react-rnd'

 

const Screen = () => {
  const [app,setapp] = useState(null)
      const apphandle= (title)=>{
         if(title == "Google"){
            setapp("https://en.m.wikipedia.org/wiki/Special:Search");
         }
         else if(title === "notes"){
            setapp("https://notes.com")
         }
         else{
            setapp("https://saimrauf.com")
         }
  
        }
    
       

  return (

      <div className='container'>
        <div className='home'  style={{ backgroundImage: `url(${Walpaper})` }}></div>
        <Bottombar />
      
       <Dragable
  title="Google"
  backgroundImage={browser}  onAppclick= {apphandle}
/>
  
{app && (
  <Rnd default={
          {
              x:100,
              y:100,
              width:100,
              height:100
              
          }
          
       } 
       dragHandleClassName="title">
         <iframe src={app} frameBorder="0"></iframe>
       </Rnd>
)}
</div>
    
)
  
}


export default Screen