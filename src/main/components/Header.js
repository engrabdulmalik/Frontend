import "./header.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenu, setMenu] = useState("");
  return (
    <div className="header1">
      <nav>
        <div className="header2">
          <div className="header6">
            <Hamburger toggled={isMenu} toggle={setMenu} size={25} />
          </div>
          <div className="header3">A3TECH</div>

          <ul className={isMenu ? "header4" : "header7"}>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="header5">HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <span className="header5">COURSES</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="header5">CONTACT US</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span className="header5">REGISTER NOW</span>
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
