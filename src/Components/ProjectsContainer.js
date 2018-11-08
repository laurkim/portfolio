import React from 'react';
import '../App.css';
import { projects } from '../Constants';
import ProjectDetail from './ProjectDetail';

const ProjectsContainer = () => {
    const projectsArray = projects.map(project => {
        return <ProjectDetail key={project.name} project={project} />
    })

    return (
        <div id="project-container">
            {projectsArray}
        </div>
    )
}

export default ProjectsContainer;