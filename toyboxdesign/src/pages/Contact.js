import React from "react";

function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <p>Please feel free to contact me through any of the below means. I look forward to hearing from you!</p>

            <img className="" src="https://ietoy.github.io/professional-portfolio/images/profile-pic.jpg" />

            <p>Email: iantoy3235@gmail.com</p>
            <p>Phone: (925) 667-6453</p>
            <p>Link to my <a href="https://github.com/ietoy" target="_blank">GitHub</a></p>
            <p>Link to my <a href="https://www.linkedin.com/in/ian-toy-265077196/" target="_blank">LinkedIn</a></p>

            {/* GET HELP HERE */}
            <p>For more detailed work history, here is my <a href="assets/IET-resume.pdf" target="_blank">resume</a></p>

        </div>
    )
}

export default Contact;