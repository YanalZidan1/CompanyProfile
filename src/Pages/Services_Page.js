
import { Link } from 'react-router-dom';
import ServicesPhoto from '../Assets/Images/ServicesPhoto.jpg';
import servicesData from '../Data/ServicesData.json';

//Components
import HeaderPages from '../Commponents/HeaderPages';
function ServicesPage() {
  return (
    <div className="ServicesPage container-fluid p-0">
      <HeaderPages
        backgroundImage={ServicesPhoto}
        title="Services"
        description="We offer a wide range of high-quality products."

      />
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
                      <Link to="#" className="stretched-link">
                        {service.title}
                      </Link>
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
