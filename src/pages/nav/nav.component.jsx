import React, { useState } from "react";

import Pdf from '../../assets/anson-resume.pdf'
import { Link } from "react-router-dom";

import "./nav.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="nav">
      <div className="title-container">
        <Link to="/">
          <h1>ANSON LAU</h1>
        </Link>
      </div>
      <div className="nav-container">
        <div className="nav-items">
          <Link to="about">
            <div>
              <span className="description">About Me</span>
            </div>
          </Link>
          <div className="circles">
            <FontAwesomeIcon
              className="circle"
              size="1x"
              opacity={0.2}
              icon={["fas", "circle"]}
            />
          </div>
          <Link to="projects">
            <div>
              <span className="description">My Projects</span>
            </div>
          </Link>
          <div className="circles">
            <FontAwesomeIcon
              className="circle"
              size="1x"
              opacity={0.2}
              icon={["fas", "circle"]}
            />
          </div>
          <div>
            <span
              className="description"
              onClick={() => openInNewTab(Pdf)}
            >
              Resume
            </span>
          </div>
          <div className="circles">
            <FontAwesomeIcon
              className="circle"
              size="1x"
              opacity={0.2}
              icon={["fas", "circle"]}
            />
          </div>
          <Link to="contact">
            <div>
              <span className="description">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
