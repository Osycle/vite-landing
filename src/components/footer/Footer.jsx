import "./Footer.scss"
import Logo from "../../assets/logo.png";
import {
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000})
  });
  return (
    <section className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti exercitationem fugit suscipit adipisci doloribus eligendi vero porro quae sint!</p>
        </div>
        <div className="footer__col">
          <h3>About</h3>
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">News</a>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Cryptocode</a>
          <a href="#">Security</a>
          <a href="#">Rankings</a>
        </div>
        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Supporn</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__col">
          <h3>Socials</h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebookF />
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram />
            </a>
            <a href="#" className="footer__icon">
              <FaTwitter />
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="footer__icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer