import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsData from '../Data/ProjectsData.json';
import HeaderPages from '../Commponents/HeaderPages';

function Product_Details() {

    const { id } = useParams();
    const project = ProjectsData.categories
        .flatMap(category => category.services)
        .find(service => service.id === parseInt(id));

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="project-details container-fluid p-0">
            <HeaderPages
                title={project.serviceName}
                description={project.details}
            />

            <div className="project-details-content container-fliid p-0">
                    <div className='project-details-photo col-md-6'>
                        <img src={require(`../Assets/icons/${project.image}`)} alt={project.serviceName} />
                    </div>
                    <div className='project-details-desc col-md-6'>
                        <h2>{project.serviceName}</h2>
                        <p>{project.description}</p>

                </div>
            </div>
        </div>
    );
}

export default Product_Details;
