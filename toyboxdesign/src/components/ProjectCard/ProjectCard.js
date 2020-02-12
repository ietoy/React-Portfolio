import React from "react";

function ProjectCard(props) {

    return (
        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <a href={props.deployed}></a>
                        <img src={props.img} />
                        <span class="card-title">{props.name}</span>
                    </div>
                    <div class="card-content">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProjectCard;