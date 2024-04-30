import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import b3 from './img/b3.webp'


export const Certificate=()=>{
    return (
        <>

      
          <Row className="certificating">
           <h3 className="crth3">Certified By UAE Government</h3>
            <Col  xs={2} className="certificate21">
         <div >
          <img className="im2" src={b1} alt=''/>
         </div>
          <h3 className="hd3">Cleaning</h3>
          
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b2} alt=''/>
         </div>
         <h3 className="hd3">Maintanence</h3>
         
                
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b3} alt=''/>
         </div>
         <h3 className="hd3">Facade & Painting</h3>
        
         
            </Col>
            
            <Col xs={2} className="certificate21">
            <div >
          <img className="im2" src={b3} alt=''/>
         </div>
         <h3 className="hd3">Facade & Painting</h3>
        
         
            </Col>
            
          </Row>
          
        
        </>
      );
}