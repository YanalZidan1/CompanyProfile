import React, { useEffect } from 'react';
import AOS from 'aos';
import data from '../Data/WhyChooseUsData.json';

function WhyChooseUs({ name, deitals }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="container WhyChooseUs " id="featured">
            <div className="section-header" data-aos="fade-up" data-aos-delay="100">
                <h2>{name}</h2>
                <p>
                    {deitals}
                </p>
            </div>
            <div className="row">
                {/* Left Column */}
                <div className="col-md-4 left">
                    {data.WhyChooseUs.slice(0, 3).map((item, index) => (
                        <div className="list-wrap" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={item.id}>
                            <div className="description">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div className="icon">
                                <img src={item.icon} alt="icon" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Column */}
                <div className="col-md-4 p-4 p-sm-5 center">
                    <div className="list-center-wrap" data-aos="fade-up" data-aos-delay="100">
                        <div className="center-icon">
                            <img src={data.centerImage} alt="center" />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-4 right">
                    {data.WhyChooseUs.slice(3).map((item, index) => (
                        <div className="list-wrap" data-aos="fade-up" data-aos-delay={100 * (index + 4)} key={item.id}>
                            <div className="icon">
                                <img src={item.icon} alt="icon" />
                            </div>
                            <div className="description">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
