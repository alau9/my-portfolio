import React, { useEffect } from "react";
import Backdrop from "../backdrop/backdrop.component";
import { Link } from "react-router-dom";


import Modal from "../modal/modal.component.jsx"

import { useState } from 'react';

import './card.styles.scss'
import Aos from "aos";
import "aos/dist/aos.css";

const CardComponent = (props) => {
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='card' data-aos={`fade-${props.direction}`}>
      <h2 className="title">{props.text}</h2>
      <div className="description">{props.description}</div>
      <div className="fineprint">{props.fineprint}</div>
      <div className="tools">Tools used: {props.tools}</div>
      <div className='actions'>
        <Link to={props.projectPath} className="btn">See Project</Link>
        <button className='btn' onClick={() => openInNewTab(props.code)}>Code</button>
      </div>
    </div>
  );
}

export default CardComponent;