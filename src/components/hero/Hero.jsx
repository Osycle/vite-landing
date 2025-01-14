import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 500})
  })
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero container">
          <div className="hero-content row">
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
              <h1>Human centric <span>Gen AI</span> technology tailored for pre-school age kids</h1>
              <div className="btn-def m-t-6">
                <a href="#">Join waitlist</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero