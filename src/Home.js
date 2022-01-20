import React from "react";
import "./Home.css";
import logo from "./img/logo.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          {/* <div className="logo">
            <img src={logo} alt="" />
          </div> */}
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Jaume</h2>
              <h3 className="home__text sweet pz__10">FrontEnd Developer.</h3>
              <h4 className="home__text pz__10">based in Paradise.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
