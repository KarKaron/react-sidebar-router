import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './menu-toggle.scss';

const MenuIcon = props => {

  const menuIcon = props.open ? faTimes : faBars
  const menuClass = props.open ? 'menuItem open' : 'menuItem'

  return (
    <div className={menuClass}>
      <FontAwesomeIcon
        className="whiteBtn" 
        icon={menuIcon}
        onClick={props.onToggle} 
      />
    </div>
  );
}

export default MenuIcon;