import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import TeamData from '../Data/TeamData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Team() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        setTeamMembers(TeamData.teamMembers);
        AOS.init();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="team-section container-fluid">
            <div className="container">
                <div className="section-header">
                    <h2 data-aos="fade-up">Our Team</h2>
                    <p data-aos="fade-up" data-aos-delay="100">Meet the talented individuals who make our company great.</p>
                </div>
                <Slider {...settings} className="team-slider">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member" data-aos="zoom-in">
                            <img src={require(`../Assets/Images/Team/${member.image}`)} alt={member.name} />
                            <div className="team-member-info">
                                <h3>{member.name}</h3>
                                <h4>{member.position}</h4>
                                <div className="social-links">
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default Team;
