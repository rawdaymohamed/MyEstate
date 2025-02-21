import { useState } from "react";
import "./Navbar.scss";
import { FaFireAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <FaFireAlt />
          <span className="logo-text">MyEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
      </div>
      <div className="mobile">
        <RiMenu3Fill className="menuIcon" onClick={toggleMenu} />
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
