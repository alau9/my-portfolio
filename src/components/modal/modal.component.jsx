import React from "react";

import "./modal.styles.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.text}</h2>
      <p className="description">{props.description}</p>
      <p className="tools">Tools Used: {props.tools}</p>
      <p className="fineprint">{props.fineprint}</p>
      <button className="btn" onClick={props.onClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
