// Projects.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsData from '../Data/ProjectsData.json';

function Projects({ title, description }) {
    const [filter, setFilter] = useState('All');
    const [filteredData, setFilteredData] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        setFilteredData(ProjectsData.categories.flatMap(category => category.services));
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredData(ProjectsData.categories.flatMap(category => category.services));
        } else {
            const selectedCategory = ProjectsData.categories.find(category => category.name === filter);
            setFilteredData(selectedCategory ? selectedCategory.services : []);
        }
    }, [filter]);

    const getImagePath = (imageName) => {
        if (!imageName) {
            console.warn('Image name is undefined or empty for one of the services.');
            return '';
        }
        try {
            return require(`../Assets/icons/${imageName}`);
        } catch (error) {
            console.error(`Error loading image: ${imageName}`, error);
            return '';
        }
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
                    <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                    {ProjectsData.categories.map(category => (
                        <button
                            key={category.name}
                            onClick={() => { setFilter(category.name); setDisplayCount(6); }}
                            className={filter === category.name ? 'active' : ''}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="row g-0 portfolio-container">
                        {filteredData.slice(0, displayCount).map((item) => (
                            <div key={item.id} className="col-xl-4 col-md-6 portfolio-item" data-aos="zoom-in">
                                <div className="card">
                                    <img src={getImagePath(item.image)} className="card__img" alt="Project Image" />
                                    <div className="card__content">
                                        <p className="card__title">{item.serviceName}</p>
                                        <p className="card__description">{item.details}</p>
                                        <Link to={`/projects/${item.id}`} className="btn btn-primary btn-sm mt-3 card__button">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
