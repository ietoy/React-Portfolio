import React from "react";
import ProjectCard from './ProjectCard/ProjectCard';
import projects from '../JSON/projects.json';

function AllProjects() {
    return (
        projects.map(proj => {
            return (
                    <ProjectCard
                        name={proj.name}
                        img={proj.img}
                        deployed={proj.deployed}
                        description={proj.description}
                    />
            )
        })
    )
}
    
export default AllProjects;