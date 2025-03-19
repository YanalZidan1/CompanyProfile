// FooterComponent.js

import React, { useEffect } from 'react';
import logo from '../Assets/Images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer id="footer" className="footer-section container-fluid">
      <div className="container-fluid"> 
        <div className="footer-content pt-5 pb-5">
          <div className="row footer-row pb-10">
            
            {/* Logo and description section */}
            <div className="col-xl-4 col-lg-4 mb-50 footer-col" data-aos="fade-up"> 
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-3">
                  <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="footer-text mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut consectetur adipisicing elit, Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="footer-social-icon mt-2">
                  <span>Follow us</span>
                  <Link href="#" className="twitter"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#" className="facebook"><i className="fab fa-twitter"></i></Link>
                  <Link href="#" className="instagram"><i className="fab fa-instagram"></i></Link>
                  <Link href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column" data-aos="fade-up" data-aos-delay="100">
              <div className="service-widget footer-widget">
                <div className="footer-widget-heading">
                  <h3>Services</h3>
                </div>
                <ul className="list">
                  <li><Link to="./Services_Page">Web Design</Link></li>
                  <li><Link to="./Services_Page">App Development</Link></li>
                  <li><Link to="./Services_Page">Cloud Services</Link></li>
                  <li><Link to="./Services_Page">Domain and Hosting</Link></li>
                  <li><Link to="./Services_Page">SEO Optimization</Link></li>
                  <li><Link to="./Services_Page">Social Media</Link></li>
                </ul>
              </div>
            </div>

            {/* Information Section */}
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column" data-aos="fade-up" data-aos-delay="200">
              <div className="service-widget footer-widget">
                <div className="footer-widget-heading">
                  <h3>Information</h3>
                </div>
                <ul className="list">
                  <li><Link to="./Team_Page">Team</Link></li>
                  <li><Link to="./Projects_Page">Projects</Link></li>
                  <li><Link to="./Services_Page">Services</Link></li>
                  <li><Link to="./WhyChooseUs_Page">WhyChooseUs</Link></li>
                </ul>
              </div>
            </div>

            {/* Contacts and Newsletter Section */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-widget footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contacts</h3>
                </div>
                <div className="footer-text">
                  <p className="address mb-2"><i className="fa fa-map-marker"></i> Amman - Jordan</p>
                  <p className='phone mb-2'><i className="fa fa-phone"></i> +962 78643 2213</p>
                  <p className="email mb-2"><i className="fa fa-envelope"></i> info@code-pro.io</p>
                </div>
                <div className="footer-widget-heading">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to get our latest news.</p>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" className='form-control' />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="copyright-area text-center">
          <div className="container">
            <div className="row align-items-center justify-content-space-between">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <p>Copyright &copy; 2024 , All Right Reserved <Link to="/">Code-Pro</Link></p>
                  <p>Made with <i className="fa fa-heart"></i> by <Link to="/">Code-Pro</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
