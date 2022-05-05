import React from "react";
import Backdrop from "../backdrop/backdrop.component";

import Modal from "../modal/modal.component.jsx"

import { useState } from 'react';

import './card.styles.scss'

const  CardComponent = (props) => {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='card'>
      <h2 className="title">{props.text}</h2>
      <div className="description">{props.description}</div>
      <div className="fineprint">{props.fineprint}</div>
      <div className="tools">Tools used: {props.tools}</div>
      <div className='actions'> 
        <button className='btn' onClick={() => openInNewTab(props.website)}>See Website</button>
        <button className='btn'  onClick={() => openInNewTab(props.code)}>Code</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text={props.text} description={props.description} fineprint={props.fineprint}  tools={props.tools} onClose={closeModalHandler} />}
    </div>
  );
}

export default CardComponent;