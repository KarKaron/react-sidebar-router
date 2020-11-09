import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './menu-icon';

import './menu-toggle.scss';

const MenuToggle = props => {

  return (
    <nav>
      <MenuIcon
        isOpen={props.isOpen}
        onToggle={props.onToggle}
      />
      <Link 
        to="/" 
        exact="true"
        className="logo"
      >
        Logo
      </Link>
    </nav>
  );
}
 
export default MenuToggle;