import "./Hero.scss";
import Mob from "../../assets/Mob.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  })
  return <section className="hero">
    <div className="hero__container wrapper">
      <div className="hero__left" data-aos="fade-right">
        <img src={Mob} />
      </div>
      <div className="hero__right" data-aos="zoom-in">
        <h1>Make easier your crypto transactions.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quidem repellat repellendus esse quia cumque.
        </p>
        <a href="#" className="btn">TRY FOR FREE</a>
      </div>
    </div>
  </section>
}

export default Hero