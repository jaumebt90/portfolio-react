import React from "react";
import "./Footer.css";
import logo from "../img/logo.jpeg";

function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10">
      <img src={logo} alt="" className="footer__img" />
      <span className="copyright">
        Copyright © 2022 programmer Jaume Ballester. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
