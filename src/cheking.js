import React, { useState } from "react";
import './check.css'
export const Checking =()=>{

    const [color, setColor] = useState('red')
    const [co,setCo] = useState('red')
    const [photo,setPhoto] = useState('i/b.jpg')
    return(
        <>

        <div className="check1">


       <div style={{color:co}}>
       {color}
       <img src={photo} alt="Hello"/>
        </div> 

        <button  onClick={()=>{
            setColor('blue');
            setCo('blue'); 
            setPhoto('i/b2.jpg');
        }}>Change Color</button>
       
        </div>
        
        </>
    )
}