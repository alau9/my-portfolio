import React, {useState} from "react";
import './blurred.styles.scss'

const Blurred = ({showColor}) =>{

    return (
    <div className={`blurred ${showColor ? "colorChange" : ""}`}>
        
    </div>
)}

export default Blurred