import React from 'react';

import './overlay.scss'

const Overlay = props => <div className="overlay" onClick={props.onClose} />
 
export default Overlay;