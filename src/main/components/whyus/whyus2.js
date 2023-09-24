import "./whyus.css";
import { GiFaceToFace } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useState } from "react";

const Whyus = () => {
  const [isEnter, setIsEnter] = useState(false);
  const handleMouseEnter = () => {
    setIsEnter(true);
  };
  const handleMouseLeave = () => {
    setIsEnter(false);
  };
  return (
    <div
      className={isEnter ? "show1" : "hide1"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w1">
        <div className="w2">
          <h1 className="w21">Why US!</h1>
          <h2 className="w22">
            With combined expirence of{" "}
            <span style={{ color: "black" }}>decades</span> from both{" "}
            <span style={{ color: "black" }}>Industry</span> and
            <span style={{ color: "black" }}> Academia</span>
          </h2>
          <h2 className="w22">
            we offer a{" "}
            <span style={{ color: "black" }}>unique blend of skill set</span>{" "}
            that can help you achieve your
            <span style={{ color: "black" }}> goals</span>
          </h2>
        </div>
        <div className="w3">
          <div className="w31">
            <div className="w311">
              <GiFaceToFace className="w311icon" />
            </div>
            <div className="w312">
              <p>
                Face to Face sessions with Experts from industry and academia
              </p>
            </div>
          </div>
          <div className="w31">
            <div className="w311">
              <GiFaceToFace className="w311icon" />
            </div>
            <div className="w312">
              <p>
                Face to Face sessions with Experts from industry and academia
              </p>
            </div>
          </div>
          <div className="w31">
            <div className="w311">
              <HiOutlineBuildingOffice2 className="w311icon" />
            </div>
            <div className="w312">
              <p>Industry Defined state of the art Curriculum</p>
            </div>
          </div>
          <div className="w31">
            <div className="w311">
              <GiFaceToFace className="w311icon" />
            </div>
            <div className="w312">
              <p>Face to Face sessions with industry and academia</p>
            </div>
          </div>
          <div className="w31">
            <div className="w311">
              <GiFaceToFace className="w311icon" />
            </div>
            <div className="w312">
              <p className="w3121">
                Face to Face sessions with industry and academia
              </p>
            </div>
          </div>
          <div className="w31">
            <div className="w311">
              <GiFaceToFace className="w311icon" />
            </div>
            <div className="w312">
              <p>
                Face to Face sessions with Experts from industry and academia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
