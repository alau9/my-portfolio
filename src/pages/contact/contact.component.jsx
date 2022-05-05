import React from "react";

import "./contact.styles.scss";

const ContactPage = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="contact-page">
      <div className="title-container">
        <h1>Contact Information</h1>
      </div>
      <div className="content-container">
        <div className="contents">
          <p>
            Email: ansonlau39@gmail.com
            <br />
            Phone Number: (778) 323-3692
            <br />
            <span className="links" onClick={() => openInNewTab("https://github.com/alau9")}> Github</span>
            <br />
            <span className="links" onClick={() => openInNewTab("https://www.linkedin.com/in/anson-lau-78a040211/")}> Linkedin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
