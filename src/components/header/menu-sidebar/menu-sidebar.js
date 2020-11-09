import React, { useState } from 'react';

import './menu-sidebar.scss'

const MenuSidebar = props => {

  const sidebarClass = props.open ? 'sidebar' : 'sidebar close'

  const [menu, setMenu] = useState([1, 2, 3, 4, 5]);
  
  const menuLink = menu.map((link, i) => {
    return (
      <li 
        key={i}
      >
        <a href={link}>Link {link}</a>
      </li>
    )
  })

  return (
    <nav className={sidebarClass}>
      <ul>
        {menuLink}
      </ul>
    </nav>
  );
}
 
export default MenuSidebar;