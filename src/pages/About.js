import React from "react";
import AllSkills from "../components/AllSkills";

function About() {
    return (
        <div className="container">
            <h1>Welcome to my website!</h1>
            <p>Hello! My name is Ian Toy, and I am an SF Bay Area-based Full Stack Web Developer with a diverse work history that spans mutliple disciplines. From music composition to insurance underwriting and all of the odd-jobs in between, I am passionate about applying the lessons I've learned to designing sleek, elegant, and efficient applications that meet real-world needs.</p>

            <h3 className="center">Skills</h3>

            <div className="row">
            <AllSkills />

            </div>

            
        </div>

    )
}

export default About;