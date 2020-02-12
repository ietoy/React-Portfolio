import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">

        <div className="container center-align">
          <a href="https://github.com/ietoy" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter-square fa-2x"></i></a>
          <a href="https://medium.com/@iantoy" target="_blank"><i class="fab fa-medium fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/ian-toy-265077196/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="https://www.twitch.tv/magiccitymtg" target="_blank"><i class="fab fa-twitch fa-2x"></i></a>
        </div>



      </div>
    </footer>
  );
}

export default Footer;