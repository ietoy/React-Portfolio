import React from "react";

function Contact() {
    return (
        <div className="container">
            <h1 className="center">Contact</h1>

            <div className="row">
                <div className="col m6 s12">
                    <div className="center">
                        <img className="circle" src="https://ietoy.github.io/professional-portfolio/images/profile-pic.jpg" />

                    </div>
                </div>

                <div className="col m6 s12">
                    <p>Email: iantoy3235@gmail.com</p>
                    <p>Phone: (925) 667-6453</p>
                    <p>Link to my <a href="https://github.com/ietoy" target="_blank">GitHub</a></p>
                    <p>Link to my <a href="https://www.linkedin.com/in/ian-toy-265077196/" target="_blank">LinkedIn</a></p>
                    <p>For more detailed work history, here is my <a href="./assets/IET-resume.pdf" target="_blank">resume</a></p>
                </div>

            </div>



        </div>
    )
}

export default Contact;