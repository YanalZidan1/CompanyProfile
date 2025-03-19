import React, { useState, useEffect } from 'react';
import logo from '../Assets/Images/logo.png';
import Switch from './Switch';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`container-fluid Navbar ${navbarBackground ? 'bg-white' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className='logo' />
          </Link>
          <button className="navbar-toggler Light border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <Switch/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link className={`nav-link ${navbarBackground ? 'text-changecolor' : 'text-light'}`} to="/">Home</Link>
              <Link className={`nav-link ${navbarBackground ? 'text-changecolor' : 'text-light'}`} to="./Services_Page">Services</Link>
              <Link className={`nav-link ${navbarBackground ? 'text-changecolor' : 'text-light'}`} to="./Team_Page">Team</Link>
              <Link className={`nav-link ${navbarBackground ? 'text-changecolor' : 'text-light'}`} to="./Projects_Page">Projects</Link>
              <Link className={`nav-link ${navbarBackground ? 'text-changecolor' : 'text-light'}`} to="./WhyChooseUs_Page">Why Choose Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
