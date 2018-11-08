import React from 'react';
import '../App.css';

const ProjectDetail = props => {
    const { project } = props
    
    return (
        <div>
            <img className="clipboard-image" src={project.splash_image} alt={project.image_alt} />
        </div>
    )
}

export default ProjectDetail;