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
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                no se que no se cuantos, de mi y mi vida enterita.
              </p>
              <p className="about__text p__color">
                no se que no se cuantos, de mi y mi vida enterita.
              </p>
              <p className="about__text p__color">
                no se que no se cuantos, de mi y mi vida enterita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
