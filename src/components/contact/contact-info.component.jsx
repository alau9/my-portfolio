import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./contact-info.styles.scss";

const ContactInfo = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="contact-info">
      <div className="icons">
        <Link to="/">
          {" "}
          <FontAwesomeIcon className="icon" size="3x" icon="home" />{" "}
        </Link>
        <FontAwesomeIcon
          onClick={() => openInNewTab("https://github.com/alau9")}
          className="icon fill"
          size="3x"
          icon={["fab", "github-square"]}
        />
        <FontAwesomeIcon
        onClick={() => openInNewTab("https://www.linkedin.com/in/anson-lau-78a040211/")}
          className="icon"
          size="3x"
          icon={["fab", "linkedin"]}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
