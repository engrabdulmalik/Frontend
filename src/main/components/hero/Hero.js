import "./hero.css";
import React from "react";
import herologo from "../../resource/wdf.png";
import dia from "../../resource/dia.png";
import { FaHandsHelping, FaTools } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";
const Hero = () => {
  return (
    <div className="hero1">
      <div className="hero2">
        <div className="her21">
          <p className="hero6">Refining The GEMS</p>
          <img className="hero5" src={dia} alt="aaa" />
        </div>
        <div className="her22">
          <div className="hero221">
            <div className="hero2211">
              <div>
                {" "}
                <FaHandsHelping className="hero9" />
              </div>

              <div>
                <span className="hero51">A</span>
                <span>SSIT</span>
              </div>
            </div>
          </div>
          <div className="hero221">
            <div className="hero2211">
              <div>
                {" "}
                <FaTools className="hero9" />
              </div>

              <div>
                <span className="hero51">A</span>
                <span>QUIRE</span>
              </div>
            </div>
          </div>
          <div className="hero221">
            <div className="hero2211">
              <div>
                {" "}
                <VscRocket className="hero9" />
              </div>

              <div>
                <span className="hero51">A</span>
                <span>MPLIFY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero3">
        <img className="hero4" src={herologo} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
