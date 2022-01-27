import React from "react";
import "./About.css";
import me from "../img/me.jpg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={me} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I'm a front-end developer.
                <br /> After several years working in the telecommunications
                sector, I felt that I needed a change in my life. Since I have
                always liked technology, I decided to enroll in the Ironhack Web
                Development Bootcamp. And so far, I'm delighted with the change!
              </p>
              <p className="about__text p__color">
                Now, I love coding and I love the idea to be able to create
                applications or webs, with functionalities that help people.
                <br /> I have developed a passion for coding and the idea to be
                able to create and develop applications or webs, to solve real
                life problems.
              </p>
              <p className="about__text p__color">
                The technology stack that I currently work with is JavaScript,
                React, Node.js, MongoDB, HTML5 and CSS3, as well as Git, Github,
                HandlebarsJS, Bootstrap, Axios. I continue to enhance my coding
                skills on a daily basis through katas and online courses and I
                plan to pursue typescript and Next.js in the coming future.
                <br /> My previous experience as a telecom technician and
                customer service manager have made me a great team asset,
                feeling comfortable dealing and communicating with people at
                different levels and being a fantastic problem solver.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
