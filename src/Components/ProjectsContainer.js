import React from 'react';
import { projects } from '../Constants';
import ProjectDetail from './ProjectDetail';

const ProjectsContainer = () => {
    const projectsArray = projects.map(project => {
        return <ProjectDetail project={project} />
    })

    return (
        projectsArray
    )
}

export default ProjectsContainer;