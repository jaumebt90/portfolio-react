import React from "react";
import "./Project.css";
import project1 from "./img/project1.jpeg";

function Project() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">efjefejfjefbjebfje</p>
        <p className="heading p__color">fenfefnejfnjenejnfej</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">blablablablabla</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
