import "./Hero.scss";
import Mob from "../../assets/Mob.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  })
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero container">
          
        </div>
      </div>
    </section>
  )
}

export default Hero