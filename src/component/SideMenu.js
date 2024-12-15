import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = () => {
const menus = [
  { name: 'Home', path: '/home'},
  { name: 'Meetings', path: '/meetings'},
  { name: 'Meals', path: 'meals'},
  { name: "FAQ's", path: '/faqs'},
  { name: 'Announcements', path: 'announcements'},
  { name: 'Contacts', path: '/contacts'},
  { name: 'Audit History', path: '/audit_history'}, 
];

  return (
    <aside className="side-menu">
      <ul>
      {menus.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
