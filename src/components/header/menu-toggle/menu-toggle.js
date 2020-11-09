import React from 'react';
import MenuIcon from './menu-icon';
import './menu-toggle.scss';

const MenuToggle = props => {

  return (
    <nav>
      <MenuIcon
        open={props.open}
        onToggle={props.toggle}
      />
      <span className="logo">Logo</span>
    </nav>
  );
}
 
export default MenuToggle;