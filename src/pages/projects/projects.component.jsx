import React, { useEffect } from "react";
import CardComponent from "../../components/card/card.component";
import "./projects.styles.scss";
import { default as festivalshred } from "../../assets/festival-shred-logo.svg";
import { default as clearweb } from "../../assets/clear-web-logo.svg";
import { default as crown } from "../../assets/crown.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-page">
      <div className="row">
        <CardComponent
          data-aos="fade-right"
          className="card"
          text="Festival Shred Ecommerce"
          code="https://github.com/alau9/festival-shreds"
          description="Taking what I learned from React to recreate a previouse ecommerce website done with Shopify. Fully functional cart, sign in/sign out, and implemented Stripe for payment method."
          tools="React, Redux, SASS"
          fineprint="*Not yet mobile compatible"
          website="https://festivals-shred.herokuapp.com/"
          direction="right"
        />
        <div className="image-container">
          <img
          data-aos="fade-left"
            className="medium"
            src={festivalshred}
            alt="Festival-Shred-Logo"
            border="0"
          />
        </div>
      </div>
      <div className="row">
        <div className="image-container">
          <img
            className="medium"
            src={clearweb}
            alt="Clear-Web-Logo"
            border="0"
            data-aos="fade-right"
          />
        </div>
        <CardComponent
          className="card"
          text="Clear Web"
          code="https://github.com/alau9/clearweb"
          description="A mostly static informational website. Main takeaway from this project is learning how to use different packages with react. More focused on styling nuances such as using svg file images and media query to have website mobile compatible."
          tools="React, SASS, Bootstrap"
          website="https://clearweb.herokuapp.com/"
          fineprint=""
          direction="left"
        />
      </div>
      <div className="row">
          <CardComponent
            className="card"
            text="Crown Ecommerce"
            code="https://github.com/alau9/first-ecommerce"
            description="Ecommerce website I made with the course 'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)'. Created a functional cart, sign in/sign out, and implemented Stripe for payment method"
            tools="React, Redux, SASS"
            fineprint="*Not yet mobile compatible"
            website="https://crwn-clothing-al-live.herokuapp.com/"
            direction="right"
          />
        <div className="image-container">
          <img
            data-aos="fade-left"
            id="crown"
            className="medium"
            src={crown}
            alt="Crown-Logo"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
