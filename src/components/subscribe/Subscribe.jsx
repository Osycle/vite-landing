import "./Subscribe.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000})
  });
  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe & get news updates</h2>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed harum saepe ducimus numquam accusamus.</p>
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Write Your Email Here" />
          <a href="#" className="btn">Subscribe</a>
        </form>
      </div>
    </section>
  )
}

export default Subscribe