import React, { useState } from 'react';
import Overlay from '../../overlay/overlay';
import { NavLink } from 'react-router-dom';

import './menu-sidebar.scss'

const MenuSidebar = props => {
  const [menu] = useState([
    {to: '/', label: 'Index'},
    {to: '/page1', label: 'Page1'},
    {to: '/page2', label: 'Page2'},
    {to: '/page3', label: 'Page3'}
  ]);  
  const menuLink = menu.map((link, i) => {
    return (
      <li key={i}>
        <NavLink 
          to={link.to}
          onClick={props.onClose}
        >
          {link.label}
        </NavLink>
      </li>
    )
  })

  const sidebarClass = props.isOpen ? 'sidebar' : 'sidebar close'

  return (
    <>
      <nav className={sidebarClass}>
        <ul>
          {menuLink}
        </ul>
      </nav>
      {props.isOpen ? <Overlay onClose={props.onClose} /> : null}
    </>
  );
}
 
export default MenuSidebar;