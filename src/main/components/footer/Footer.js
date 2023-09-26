import "./footer.css";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer2">
        <div className="footer21">
          <h1 className="footer211">LOGO</h1>
        </div>
        <div className="footer22">
          <h2>Courses</h2>
          <ul className="footer221">
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="fotl1">Full Stack Web Development</span>
              </Link>
            </li>
            <li className="footer221">Cloud Computing</li>
            <li className="footer221">UI/UX Design</li>
            <li className="footer221">Programming in Python</li>
          </ul>
        </div>
        <div className="footer23">
          <h2>Quick Links</h2>
          <ul className="footer221">
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="fotl1">HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="fotl1">ABOUT US</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="fotl1">CONTACT US</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="fotl1">REGISTER NOW</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer3">
        <div className="footer4">
          <p className="footer7">A3TECH</p>
          <span className="footer71">
            copywrite &#169; 2023. All Rights Reserved
          </span>
        </div>
        <div className="footer5">
          <BsFacebook className="footer61" />

          <BsInstagram className="footer61" />

          <BsLinkedin className="footer61" />

          <BsTwitter className="footer61" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
