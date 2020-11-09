import React, { useState } from 'react';
import MenuSidebar from './menu-sidebar/menu-sidebar';
import MenuToggle from './menu-toggle/menu-toggle';

import './header.scss'

const Header = () => {

  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(() => !open) 
  }

  return (
    <header className="header">
      <MenuSidebar
        open={open}
        toggle={onToggle}
      />
      <MenuToggle
        open={open} 
        toggle={onToggle}
      />
    </header>
  );
}
 
export default Header;