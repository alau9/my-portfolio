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
        <FontAwesomeIcon
          onClick={() => openInNewTab("https://github.com/alau9")}
          className="icon fill"
          size="2xs"
          icon={["fab", "github"]}
        />
        <FontAwesomeIcon
        onClick={() => openInNewTab("https://www.linkedin.com/in/anson-lau-78a040211/")}
          className="icon"
          size="2xs"
          icon={["fab", "linkedin-in"]}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
