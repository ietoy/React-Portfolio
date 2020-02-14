import React from "react";
import AllSkills from "../components/AllSkills";
import "./About.css";

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <div className="center-align">
                        <img className="tbdesign" src="./images/tbdesign-logo.png"/>
                    </div>
                </div>
                <div className="col m6 s12">
                    <h1 className="right-align">Welcome to my website!</h1>
                </div>
            </div>
            <p>Hello! My name is Ian Toy, and I am an SF Bay Area-based Full Stack Web Developer with a diverse work history that spans mutliple disciplines. From music composition to insurance underwriting and all of the odd-jobs in between, I am passionate about applying the lessons I've learned to designing sleek, elegant, and efficient applications that meet real-world needs.</p>
            <h3 className="center">Skills</h3>
            <div className="row">
                <AllSkills />
            </div>    
        </div>

    )
}

export default About;