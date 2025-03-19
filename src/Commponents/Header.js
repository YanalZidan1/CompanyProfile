import React, { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero_bg from '../Assets/Images/hero-bg.png';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Modal from 'react-bootstrap/Modal';

function Header() {
    const backgroundStyle = {
        backgroundImage: `url(${hero_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
        width: '100%',
    };

    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {},
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <div className="container-fluid Header" style={backgroundStyle}>
            {init && <Particles id="tsparticles" init={particlesLoaded} options={options} />}
            <div
                className="hero-content"
                data-aos="fade-up"
            >
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-7 offset-lg-5 dark-bg order-lg-1 d-flex flex-column justify-content-start text-left caption"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <div className="hero_content_1" data-aos="fade-in">
                                <h1>
                                    Delivering Superior Services <span>IT Solutions.</span>
                                </h1>
                                <p>
                                    You can easily change any design to your own. It is also a highly customizable SEO-friendly template.
                                </p>
                                <div className="sotioal-media" data-aos="fade-up" data-aos-delay="500">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="hero_btn" data-aos="zoom-in" data-aos-delay="700">
                                    <button
                                        className="btn-GetQuotes_1"
                                        onClick={() => setShow(true)}
                                    >
                                        Get Quotes
                                    </button>
                                    <button className="btn-GetQuotes_1">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for "Get Quotes" */}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container my-4 ContactUs">
                        <h2 className="mb-4 text-center text-primary">Contact Us</h2>
                        <p className="mb-4 text-center">Lorem ipsum dolor sit amet</p>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Name*" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="email" className="form-control" placeholder="Email*" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder="Write Your Message*" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;
