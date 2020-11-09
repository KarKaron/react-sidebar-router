import React, { useState } from 'react';
import MenuSidebar from './menu-sidebar/menu-sidebar';
import MenuToggle from './menu-toggle/menu-toggle';

import './header.scss'

const Header = () => {

  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(() => !open) 
  }

  const onClose = () => {
    setOpen(() => false)
  }

  return (
    <header className="header">
      <div className="container">
        <MenuSidebar
          isOpen={open}
          onClose={onClose}
        />
        <MenuToggle
          isOpen={open} 
          onToggle={onToggle}
        />
      </div>
    </header>
  );
}
 
export default Header;