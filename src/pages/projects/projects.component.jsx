import React from "react";
import CardComponent from "../../components/card/card.component";
import "./projects.styles.scss";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="title-container">
        <h1>Projects</h1>
      </div>
      <CardComponent
        text="Festival Shred"
        code="https://github.com/alau9/festival-shreds"
        description="Taking what I learned from React to recreate a previouse ecommerce website done with Shopify. Fully functional cart, sign in/sign out, and implemented Stripe for payment method."
        tools="React, Redux, SASS"
        fineprint="Not yet mobile compatible"
        website="https://festivals-shred.herokuapp.com/"
      />
      <CardComponent
        text="Clear Web"
        code="https://github.com/alau9/clearweb"
        description="A mostly static informational website. Main takeaway from this project is learning how to use different packages with react. More focused on styling nuances such as using svg file images and media query to have website mobile compatible."
        tools="React, SCSS, Bootstrap"
        website="https://clearweb.herokuapp.com/"
      />
      <CardComponent
        text="Crown Ecommerce"
        code="https://github.com/alau9/first-ecommerce"
        description="Ecommerce website I made with the course 'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)'. Created a functional cart, sign in/sign out, and implemented Stripe for payment method"
        tools="React, Redux, SASS"
        fineprint="Not yet mobile compatible"
        website="https://crwn-clothing-al-live.herokuapp.com/"
      />
      <CardComponent
        text="Simple Todo App"
        code="https://github.com/alau9/My-Todo_List"
        description="My first time putting my what I have learned to use. Created with Vanilla Javacript. I had a lot of fun coloring and styling with CSS."
        tools="Javascript, CSS"
        website="https://todo-app-al.herokuapp.com/"
      />
    </div>
  );
};

export default ProjectPage;
