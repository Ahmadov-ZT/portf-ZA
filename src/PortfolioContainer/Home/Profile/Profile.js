import React from "react";
import "../Profile/Profile.css";
import ScrollService from "../../../Utilities/ScrollService";
import { Typewriter } from "react-simple-typewriter";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cloz">
            <div className="cloz-icon">
              <a href="https://www.facebook.com/">
                <i className=" fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className=" fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className=" fa fa-instagram"></i>
              </a>
              <a href="https://github.com/Ahmadov-ZT">
                <i className=" fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/ahmad-zaatreh/">
                <i className=" fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">AHMAD</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  words={[
                    "Web Devloper 😎",
                    "React.js 🌐",
                    "Next.js ⏭️",
                    "HTML/CSS 💻",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <span className="profile-role-tagline">
                Bulding application with front and back end operation.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="ZatrehCv.pdf" download="Zatreh Cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
