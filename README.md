# My Professional Portfolio
This website is a platform for my professional web presence built with the React framework.

![FrontPage](/public/images/aboutpage.PNG)

## Table of Contents
List the different sections of your README here.

## Introduction
As a web developer, I need a professional portfolio so I can attact employers and contracts. My websites aims to accomplish this goal by highlighting my previous projects, my credentials, and positive reviews from happy customers.

## Technologies Used
* HTML
* CSS
* JavaScript
* Node.js
* React

## Requirements
This website can be viewed in any browser that supports JavaScript.

## Under the Hood
As a young developer, I am focused on learning new skills and building new applications. In order to attract clients, I do these things to improve my coding abilities and to build a robust porfolio showcasing my implementation of these skills.

Using the React famework, I can easily update elements generated on each page by simply updating my list of projects and skills.

Here is a JSON object containing information about a few of my most recent projects:

    [
        {
            "id": 1,
            "name": "Radlibz",
            "img": "./images/radlibz-PIC.png",
            "gif": "img gif",
            "description": "Play Mad-Libs on the go! Hear your story in any accent you like!",
            "deployed": "https://amandalatkins.github.io/radlibz/",
            "repo": "https://github.com/amandalatkins/radlibz" 
        },
        {
            "id": 2,
            "name": "Poke-Memory",
            "img": "./images/pokememory-PIC.png",
            "gif": "img gif",
            "description": "A Pokemon themed memory game! What's your high score?",
            "deployed": "https://ietoy.github.io/Poke-Memory/",
            "repo": "https://github.com/ietoy/Poke-Memory" 
        },
        {
            "id": 3,
            "name": "Tinfoil Hat",
            "img": "./images/tinfoilhat-PIC.png",
            "gif": "img gif",
            "description": "Tin Foil Hat informs users about their congressional representatives and their campaign finance donation history.",
            "deployed": "https://immense-brushlands-89111.herokuapp.com/",
            "repo": "https://github.com/boundsalexis/tinfoil-hat" 
        },
        ...
    ]

By leveraging the power of React components, we are able to dynamically generate a project card that displays on the project page from this JSON file.

In our ProjectCard component, we feed properties (props) to a function that generates HTML using JSX:

    import React from "react";
    import "./style.css";

    function ProjectCard(props) {
        return (
                <div className="col l3 m4 s6 ">
                    <div className="card hoverable project-card">
                        <div className="card-image">
                            <a className="" href={props.deployed}>
                                <img src={props.img} />
                            </a>
                        </div>
                        <div className="card-content">
                        <span className="card-title">{props.name}</span>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
        )
    }

    export default ProjectCard;

This component is then imported into our AllProjects component, which takes the information in the project.json file and creates several elements using the above component and the map array method:

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

Finally, we call this AllProjects component when we generate the Projects page here:

import React from "react";
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

The resulting product looks something like this:

![Project Page](/public/images/projectpage.PNG)


## The App in Action!
* [See Live Site](deployed-link-goes-here) 

## Authors
Ian Toy
* [GitHub](https://github.com/ietoy)
* [LinkedIn](https://www.linkedin.com/in/ian-toy-265077196/)

## Acknowledgements
Special thanks to our instructor Jerome and our TAs Mahisha and Kerwin. I really apprecaite all of your help!