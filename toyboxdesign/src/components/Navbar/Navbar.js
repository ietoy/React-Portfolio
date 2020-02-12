import React from "react";

function Navbar() {

    return (
        <div>
            <nav>
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">
                        ToyBox Design
                        <img src="../images/tbdesign-logo.png" />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu icon</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;