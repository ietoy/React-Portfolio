import React from "react";
// import ProjectCard from "../components/ProjectCard/ProjectCard"
// import projects from '../JSON/projects.json';
import CardContainer from '../components/CardContainer/CardContainer';
import AllProjects from "../components/AllProjects";

function Projects() {

    return (
        <div>
            <h1 className="center">Projects</h1>
            <CardContainer>
                <AllProjects />
            </CardContainer>
        </div>
    )
}

export default Projects;