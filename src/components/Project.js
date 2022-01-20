import React from "react";
import "./Project.css";
import project1 from "../img/project1.jpeg";
import project2 from "../img/project2.png";
import project3 from "../img/project3.jpeg";
import project4 from "../img/project4.jpeg";
import project5 from "../img/project5.png";
import project6 from "../img/project6.png";

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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project2} alt="" className="project__img" />
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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project4} alt="" className="project__img" />
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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project5} alt="" className="project__img" />
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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__img__box pointer relative">
                <div className="project__img__box">
                  <img src={project6} alt="" className="project__img" />
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
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
