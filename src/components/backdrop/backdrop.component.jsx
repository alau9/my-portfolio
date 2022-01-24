import React from "react";

import './backdrop.styles.scss'

const Backdrop = (props) => (
    <div className='backdrop' onClick={props.onClick} />
)

export default Backdrop