import React from "react";
import "./About.css";
import me from "./img/me.png";

function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={me} alt="" className="about__img" />
          </div>
          <div className="col__2"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
