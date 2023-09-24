import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../../resource/cc.png";
import p2 from "../../resource/fswd.jpg";
import "./cslider.css";
const Cslider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className="c2"
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
      <div className="c3">
        <img src={p1} className="c31" alt="course banner" />
      </div>
      <div className="c3">
        <img src={p2} className="c31" alt="course banner" />
      </div>
      <div className="c3">
        <img src={p2} className="c31" alt="course banner" />
      </div>
      <div className="c3">
        <img src={p2} className="c31" alt="course banner" />
      </div>
      <div className="c3">
        <img src={p2} className="c31" alt="course banner" />
      </div>
    </Carousel>
  );
};

export default Cslider;
