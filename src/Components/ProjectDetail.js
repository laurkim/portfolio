import React from 'react';
import '../App.css';

const ProjectDetail = props => {
    console.log(props);

    const { project } = props
    
    return (
        <div>
            <img className="clipboard-image" src={project.splash_image} />
        </div>
    )
}

export default ProjectDetail;