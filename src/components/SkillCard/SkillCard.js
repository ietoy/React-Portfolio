import React from "react";
import "./style.css";

function SkillCard(props) {
    return (
        <div className="col l3 m4 s6 xs12 hoverable center">
            <div className="valign-center">
                <img className="skill-card" src={props.img}/>
            </div>
        </div>
    )
}

export default SkillCard;
