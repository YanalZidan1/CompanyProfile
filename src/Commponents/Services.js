import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import servicesData from '../Data/ServicesData.json';
import { Link } from 'react-router-dom';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div id="services" className="Services">
      <div className="top-icon-box position-relative">
        <div className="container position-relative">
          <div className="row gy-4 justify-content-center">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="col-sm-6 col-md-4 col-xl-4 Services_box position-relative"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3)}
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src={service.icon} alt="icon" />
                  </div>
                  <h4 className="title">
                    <Link href="#" className="stretched-link">
                      {service.title}
                    </Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 text-center mt-5">
            <Link to="./Services_Page" className="btn-GetQuotes_1">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
