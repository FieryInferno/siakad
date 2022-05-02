import React from 'react';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';

const Menu = ({content}) => {
  const isPathActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {content.map((menu, index) => (
        <li
          key={index}
          className={isPathActive(menu.path) ?
          'nav-item menu-items active' : 'nav-item menu-items' }>
          <Link className="nav-link" to={menu.path}>
            <span className="menu-icon">
              {menu.icon}
            </span>
            <span className="menu-title"><Trans>{menu.title}</Trans></span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
