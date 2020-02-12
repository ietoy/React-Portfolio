import React from "react";

import ProjectCard from "../components/ProjectCard/ProjectCard"

import projects from '../JSON/projects.json';

function Projects() {
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

export default Projects;