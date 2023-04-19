import React, { useState } from 'react'
import banner from "../../../../img/banner.jpg"
import AllRoutes from '../../../../Routes/AllRoutes';
import DLogin from '../../Dashboard-Login/DLogin';
import "../../../../App.css"
// import banner1 from "./img/banner1.jpg"
// import banner2 from "./img/banner2.jpg"



export default function Welcome_Page() {
 
      

    const [welcome, setWelcome] = useState(true);
    
  function clickHandler(){
    setWelcome(false);
  } 
  

    return (
      <div>
         {welcome ? 
            <div>
           
            <img height={550} width={1480}  src={banner} alt="First slide" />
           <div className="Top">
         <center>
            <h1 className="font-weight-bold text-danger">SecureLife Hospital </h1>
            <h5> OUR PASSION IS TO HEAL </h5>
            <h1>Your Health  Is Our Priority</h1>
            <button  onClick={clickHandler}>WELCOME</button></center>
            </div>
          </div> : <DLogin />}
      </div>
   
  )
}
 

