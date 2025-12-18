import React from "react";

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
          "I’m an analytics professional with a background in sales operations, focused on building data-driven insights that support planning, forecasting, and business decision-making in retail and consumer environments.

          In my current role, I develop forecasting models, performance dashboards, and analytical tools that help teams understand demand patterns, evaluate trends, and make informed decisions across product categories, customer segments, and sales channels. I work closely with cross-functional partners in sales, merchandising, and finance to translate complex data into clear, actionable insights.

          My approach combines structured analysis with a strong understanding of business context. I’m particularly interested in problems that sit at the intersection of analytics and strategy—where data can be used not just to report performance, but to guide decisions, improve efficiency, and support sustainable growth.

          Areas of focus

          Forecasting and trend analysis

          Sales and performance analytics

          Business intelligence and dashboarding

          Planning and decision support

          Cross-functional analytics

          Tools
          Python, Power BI, SQL, Excel

          I’m interested in senior analyst and planning-oriented roles within consumer, retail, and growth-focused organizations where analytics plays a central role in shaping business outcomes."
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
