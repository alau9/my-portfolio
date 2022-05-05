import React from "react";
import "./footer.styles.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <Link to="about">
          <div className="footer-items">About Me</div>
        </Link>
        <Link to="/">
          <div className="footer-items">My Projects</div>
        </Link>
        <Link to="contact">
          <div className="footer-items">Contact</div>
        </Link>
        <div className="footer-items">Download Resume</div>
        <div className="footer-items" onClick={() => openInNewTab("https://www.linkedin.com/in/anson-lau-78a040211/")}>Linkedin</div>
        <div className="footer-items" onClick={() => openInNewTab("https://github.com/alau9")}>GitHub</div>
      </div>
    </div>
  );
};

export default Footer;
