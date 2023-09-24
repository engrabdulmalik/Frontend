import "./footer.css";
import React from "react";


const Footer = () => {
  
  return (
    
    <div className="footer1">
      <div className="footer2">
      <div className="footer21">
      <h1 className="footer211">LOGO</h1>
      </div>
      <div className="footer22">
      <h2>Courses</h2>
      <ul className="footer8">
        <li className="footer221">Full Stack Web Development</li>
        <li className="footer221">Cloud Computing</li>
        <li className="footer221">UI/UX Design</li>
        <li className="footer221">Programming in Python</li>
      </ul>
      </div>
      <div className="footer23">
      <h2>Quick Links</h2>
      <ul className="footer8">
        <li className="footer221">Home</li>
        <li className="footer221">About Us</li>
        <li className="footer221">Contact Us</li>
        <li className="footer221">Register Now</li>
      </ul>
      </div>
        
      </div>
      <div className="footer3">
        <div className="footer4">
        <p className="footer7">A3TECH</p>
        <span className="footer71">copywrite &#169; 2023. All Rights Reserved</span>
        </div >
        <div className="footer5">
          <div className="footer6">
          <ion-icon name="logo-facebook" size="large" ></ion-icon>

          </div>
        <div className="footer6">
        <ion-icon name="logo-instagram" size="large" ></ion-icon>
        </div>

        <div className="footer6">
        <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </div>

        <div className="footer6">
        <ion-icon name="logo-twitter" size="large"></ion-icon>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
