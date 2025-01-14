import "./Header.scss"
import Logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io"
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true)
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo">
            <div className="img-content">
              <img src={Logo} alt="logo"/>
            </div>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Location</a></li>
            </ul>
          </nav>
        </div>
      </div>
        
    </header>
  )
}

export default Navbar