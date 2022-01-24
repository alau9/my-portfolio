import React from "react";
import Blurred from "../../components/blurred/blurred.component";
import ContactInfo from "../../components/contact/contact-info.component";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="about-page">
    <div className="title-container">
      <h1>About Me</h1>
    </div>
    <div className="content-container layered">
      <div className="contents">
        <p>
        Hello there! I am a self taught front-end developer located in Vancouver, BC.
          Currently I am looking for an opportunity to jump start my career as a
          web developer. I was first exposed to coding during my undergrad at
          UBC where I took a few computer science classes as electives and instantly
          loved it. After a few years working in merchandising analytic roles, I
          have decided to start a new career path to finally pursue my passion
          for coding.{" "}
        </p>
      </div>
      <Blurred />
    </div>
  </div>
);

export default AboutPage;
