import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function HeaderPages({ title, description, backgroundImage }) {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0b0e17',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
        width: '100%',
    };

    const [init, setInit] = useState(false);
    const [visibleLetters, setVisibleLetters] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    useEffect(() => {
        title.split('').forEach((letter, index) => {
            setTimeout(() => {
                setVisibleLetters((prev) => {
                    const newVisibleLetters = [...prev];
                    newVisibleLetters[index] = letter;
                    return newVisibleLetters;
                });
            }, index * 200);
        });
    }, [title]);

    const options = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "repulse" },
                onHover: { enable: true, mode: 'grab' },
            },
            modes: {
                push: { distance: 200, duration: 15 },
                grab: { distance: 150 },
            },
        },
        particles: {
            color: { value: "#FFFFFF" },
            links: {
                color: "#FFFFFF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                outModes: { default: "bounce" },
                random: true,
            },
            number: {
                density: { enable: true },
                value: 150,
            },
            opacity: { value: 1.0 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    return (
        <div className="HeaderPages container-fluid p-0" style={backgroundStyle}>
            {init && <Particles id="tsparticles" options={options} />}
            <div className="HeaderPages_overlay row">
                <div className="HeaderPages_overlay_content">
                    <h1 data-aos="fade-up">
                        {visibleLetters.map((letter, index) => (
                            <span
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    opacity: letter ? 1 : 0,
                                    transform: letter ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>
                    <p data-aos="fade-up">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderPages;
