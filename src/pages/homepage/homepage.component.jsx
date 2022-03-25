import React, { useState } from "react";
import Blurred from "../../components/blurred/blurred.component";
import ContactInfo from "../../components/contact/contact-info.component";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
  const [showColor, setShowColor] = useState();

  function changeColorHandler() {
    setShowColor(true);
  }

  function returnColorHandler() {
    setShowColor(false);
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="homepage">
      <div className="title-container">
        <h1>Anson Lau</h1>
        <h2>Portfolio</h2>
      </div>
      <div className="content-container">
        <div className="layered">
          <Blurred showColor={showColor} />
          <div className="content">
            <Link to={"about"}>
              <div className="icons" onMouseEnter={changeColorHandler} onMouseLeave={returnColorHandler}>
                {" "}
                <FontAwesomeIcon classname="icon" size="4x" icon="portrait" />
                <span className="description">About Me</span>
              </div>
            </Link>
            <Link to="projects">
              <div className="icons" onMouseEnter={changeColorHandler} onMouseLeave={returnColorHandler}>
                <FontAwesomeIcon classname="icon" size="4x" icon="laptop" />
                <span className="description">Projects</span>
              </div>
            </Link>
            <div className="icons" onMouseEnter={changeColorHandler} onMouseLeave={returnColorHandler}>
              <FontAwesomeIcon
                onClick={() =>
                  openInNewTab("https://my.indeed.com/p/ansonl-hmyztlt")
                }
                classname="icon"
                size="4x"
                icon="folder"
              />
              <span className="description">Resume</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
