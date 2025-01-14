import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 500})
  })
  return (
    <section className="advantages">
      <div className="advantages__wrapper">
        <div className="advantages container">
          <div className="advantages-content row">
            <div className="col-12 col-md-6 col-lg-5">
       
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero