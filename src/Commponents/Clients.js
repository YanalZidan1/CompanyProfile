import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // استيراد React Slick
import ClientsData from '../Data/ClientsData.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS لـ AOS
import 'slick-carousel/slick/slick.css'; // استيراد CSS لـ Slick
import 'slick-carousel/slick/slick-theme.css'; // استيراد Theme CSS لـ Slick

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(ClientsData.clients);
    AOS.init();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="clients-section">
      <h2 data-aos="fade-up">Our Clients</h2>
      <Slider {...settings}
        className="client-slider"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
        {clients.map(client => (
          <div key={client.id} className="client-item" data-aos="zoom-in">
            <img src={require(`../Assets/Images/Clinents/${client.image}`)} alt={client.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Clients;
