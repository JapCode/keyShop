import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ObjFilter from './ObjFilter';

const NavFilter = () => {


 let navItems = ObjFilter.map(({ path, name, key, }) => (
    <NavLink
      className={(navData) => (navData.isActive ? 'active' : '')}
      exact="true"
      key={key}
      to={path}
    >
      <li>
        <span>{name}</span>
      </li>
    </NavLink>
  ));

  return(
      <nav className="filter">
        <ul>{navItems}</ul>
      </nav>
  );
}
export default NavFilter;
