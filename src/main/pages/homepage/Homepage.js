import "./homepage.css";
import Header from "../../components/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Partner from "../../components/partners/Partner";
import Whyus from "../../components/whyus/Whyus";
import HomeCourse from "../../components/course_slider/HomeCourse";
import Instructor from "../../components/instructor/Instructor";
const Homepage = () => {
  return (
    <div className="home1">
      <div>
        <Header> </Header>
      </div>
      <div>
        <Hero> </Hero>
      </div>
      <div className="home2">
        <div className="home21">
          <Partner></Partner>
        </div>
        <div className="home22">
          <Whyus />
        </div>
        <div className="home23">
          <HomeCourse />
        </div>
        <div className="home24">
          <Instructor />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
