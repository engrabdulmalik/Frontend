import "./partner.css"
import React from "react";
import p1 from "../../resource/devninja.png"



const Partner= () => {
  return (
    <div className="part1">
        <div className="part2">
        <h1 className="part21">Our Partners</h1>
        </div>
        <div className="part3">
        <div className="part31"> 
        <img src={p1} alt="devninja logo" className="part4"/>
         </div>
            <div className="part31"> <img src={p1} alt="devninja logo" className="part4"/></div>
            <div className="part31"><img src={p1} alt="devninja logo" className="part4"/></div>
            <div className="part31"><img src={p1} alt="devninja logo" className="part4"/></div>
            
        </div>
    </div>
  );
};

export default Partner;
