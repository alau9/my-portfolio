import React, { useEffect } from "react";
import CardComponent from "../../components/card/card.component";
import "./projects.styles.scss";
import { default as line } from "../../assets/line-logo.svg";
import { default as pie } from "../../assets/piechart-logo.svg";
import { default as archive } from "../../assets/archive.svg";
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
          text="Sales Forecasting for Retail Planning"
          code="https://github.com/alau9/revenue-forecasting-time-series"
          description="A retail revenue forecasting model using synthetic data, applying Holt-Winters and linear regression to support assortment, inventory, and financial planning across channels and categories."
          fineprint=""
          website=""
          direction="right"
        />
        <div className="image-container">
          <img
            data-aos="fade-left"
            className="medium"
            src={line}
            alt="line-logo"
            border="0"
          />
        </div>
      </div>
      <div className="row">
        <div className="image-container">
          <img
            className="medium"
            src={pie}
            alt="pie-logo"
            border="0"
            data-aos="fade-right"
          />
        </div>
        <CardComponent
          className="card"
          text="Merchandise Performance Dashboard"
          code=""
          description="An interactive Power BI dashboard designed to analyze retail sales and inventory performance across channels and product categories. The project focuses on building a scalable data model and clear performance views to support merchandising and planning decisions."
          tools="Power BI"
          website=""
          fineprint=""
          direction="left"
        />
      </div>
      <div className="row">
        <CardComponent
          className="card"
          text="Archive"
          code=""
          description="An archive of exploratory projects focused on web development, analytics, and applied problem solving."
          tools=""
          fineprint=""
          website=""
          direction="right"
        />
        <div className="image-container">
          <img
            data-aos="fade-left"
            id="archive"
            className="medium"
            src={archive}
            alt="archive-logo"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
