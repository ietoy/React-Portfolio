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