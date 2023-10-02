import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { label: "Languages", logoSrc: "language2.png" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 40 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "Next JS", ratingPercentage: 50 },
    { skill: "XD", ratingPercentage: 40 },
    { skill: "Gatsby JS", ratingPercentage: 30 },
    { skill: "PDF", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Motoright Motors Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Motorcycle website to sharing your experiences, photos, lifestyle with your friends! After creating your profile, you can add  nformation about your vehicle, create routes, and easily access the statistics of your journeys.",
      subHeading: "Technologies Used: Next JS, Bootsrap, JavaScript, HTML, CSS",
    },
    {
      title: "Emlak katılım (Müzayede)",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A website for selling real estate by activating the auction service for Amlak Holding Company.",
      subHeading: "Technologies Used: React JS, HTML, CSS.",
    },
    {
      title: "Biometric signature Forms",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Working on more than 20 different projects for car rental companies, hospitals, hotels, and other companies within the biometric signature feature.",
      subHeading: "Technologies Used: JS, HTML, CSS, Pdf, Testing.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Master's degree Kocaeli University"}
        subHeading={"Visual Communication Design and Advertising."}
        fromDate={"2017"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Bachelor's degree University of Jordan"}
        subHeading={"Business Information Technology (BIT)."}
        fromDate={"2010"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"ALFAROOQ HighSchool"}
        subHeading={"Scientific section."}
        fromDate={"2008"}
        toDate={"2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"DDTECH | DX Starts Here"}
          subHeading={"UI Front-End Web Developer"}
          fromDate={"Mar 2021"}
          toDate={"Jul 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a React web developer
          </span>
        </div>
        <br />
        <ResumeHeading
          heading={"Keskin Kimya"}
          subHeading={"Export and import specialist"}
          fromDate={"Oct 2020"}
          toDate={"Feb 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as export and import specialist.
          </span>
        </div>
        <br />
        <ResumeHeading
          heading={"Nawafez Software"}
          subHeading={"Front-End Web Developer"}
          fromDate={"Jan 2015"}
          toDate={"Sep 2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a C# and Front-end Developer.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Cooking"
        description="The best thing while going with cooking as a hobby is that, you have unlimited opportunities to do good experiments. Cooking needs concentration rather one can say that it is just like meditation. "
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,

    /* Languges */
    <div className="resume-screen-container" key="languages">
      <ResumeHeading heading="Arabic" description="Native Language." />
      <ResumeHeading
        heading="English"
        description="Excellent in reading, writing, & speaking"
      />
      <ResumeHeading
        heading="Turkish"
        description="I have C1 level in turkish language, excellent in reading, writing, & speaking."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Imgs/Resume/${bullet.logoSrc}`)}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
