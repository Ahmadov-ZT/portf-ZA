import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../Imgs/WaveShape.png")}
          alt="No internet connection"
        />
      </div>
    </div>
  );
};

export default Footer;
