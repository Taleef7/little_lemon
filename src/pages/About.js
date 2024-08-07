import "./About.css";
import AboutPic1 from "../images/logos/aboutus1.jpg";
import AboutPic2 from "../images/logos/aboutus2.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
              dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborum.
              Lorem ipsum dolor!!!
            </p>
            <p>
              Kworem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
              dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborean.
              Kwama eggs!!!
            </p>
            <p>Corem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae reprehenderit quod, veniam pariatur quaeho
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
              dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
              dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborean.
              Kwama eggs!!!
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-6">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
