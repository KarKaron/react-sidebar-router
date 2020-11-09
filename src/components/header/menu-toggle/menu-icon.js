import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './menu-toggle.scss';

const MenuIcon = props => {

  const menuIcon = props.isOpen ? faTimes : faBars
  const menuClass = props.isOpen ? 'menuItem open' : 'menuItem'
  const menuIconClass = props.isOpen ? 'icon icon-black' : 'icon icon-white'

  return (
    <div className={menuClass}>
      <FontAwesomeIcon
        className={menuIconClass}
        icon={menuIcon}
        onClick={props.onToggle} 
      />
    </div>
  );
}

export default MenuIcon;