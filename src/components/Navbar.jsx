import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/IMG-20251226-WA0012.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="top-bar">
        <div className="ticker-content">
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          {/* Duplicate for seamless loop */}
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
          <span className="ticker-item">ADMISSIONS OPEN FOR 2026 &nbsp;•&nbsp; YEARLY INTAKE LIMITED TO 100 SEATS - FILLING FAST! &nbsp;•&nbsp; CONTACT: +91 97888 12111</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="navbar-logo">
            <img src={logoImg} alt="Toppers Academy Logo" className="logo-img" />
            <div className="logo-text">
              <span className="text-primary font-bold">TOPPERS</span>
              <span className="text-accent font-bold">ACADEMY</span>
            </div>
          </a>
        
        <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-item" onClick={toggleMenu}>Home</a>
          <a href="#about" className="nav-item" onClick={toggleMenu}>About</a>
          <a href="#courses" className="nav-item" onClick={toggleMenu}>Courses</a>
          <a href="#mind-dynamics" className="nav-item" onClick={toggleMenu}>Mind Dynamics</a>
          <a href="#results" className="nav-item" onClick={toggleMenu}>Results</a>
          <a href="#testimonials" className="nav-item" onClick={toggleMenu}>Testimonials</a>
          <a href="#gallery" className="nav-item" onClick={toggleMenu}>Gallery</a>
          <a href="#contact" className="nav-item" onClick={toggleMenu}>Contact</a>
        </div>

        <div className="nav-btn-container">
          <a href="#contact" className="btn btn-primary nav-cta">Enquire Now</a>
        </div>

        <button className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
