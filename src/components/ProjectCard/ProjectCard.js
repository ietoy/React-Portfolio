import React from "react";
import "./style.css";


function ProjectCard(props) {
    return (
            <div className="project-card" className="col l3 m4 s6 ">
                <div className="card hoverable">
                    <div className="card-image">
                        <a className="valign-wrapper" href={props.deployed}>
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