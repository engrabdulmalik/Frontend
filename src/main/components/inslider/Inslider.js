import "./inslider.css";
import met from "../../resource/meta.png";
import goo from "../../resource/google.png";
import ibm from "../../resource/ibm1.png";
import aws from "../../resource/aws.png";
import rh from "../../resource/red.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Inslider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 2,
      slidesToSlide: 1, 
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className="ic2"
      swipeable={true}
      draggable={false}
      autoPlay={true}
      infinite={true}
      rewindWithAnimation={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      arrows={false}
      customTransition="transform 2000ms ease-in-out"
      transitionDuration={2000}
    >
      <div className="ic3">
        <img src={met} className="ic31" alt="course banner" />
      </div>
      <div className="ic3">
        <img src={goo} className="ic31" alt="course banner" />
      </div>
      <div className="ic3">
        <img src={ibm} className="ic31" alt="course banner" />
      </div>
      <div className="ic3">
        <img src={aws} className="ic31" alt="course banner" />
      </div>
      <div className="ic3">
        <img src={rh} className="ic31" alt="course banner" />
      </div>
    </Carousel>
  );
};

export default Inslider;
