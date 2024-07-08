import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
const Sidebar = () => {
  return (
    <Menu>
    <a id="home" className="menu-item" href="/">Logout</a>
    <a id="about" className="menu-item" href="/about">Saved Trips</a>
    <a id="contact" className="menu-item" href="/contact">Memories</a>
    <a id="Weather" className="menu-item" href="/Weather">Weather</a>
  </Menu>
  );
};

export default Sidebar;