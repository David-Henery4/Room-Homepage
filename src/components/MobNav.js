import React from 'react'
import {Hamburger, Logo} from "../svgs/index";
import navigationData from '../navData/navdata';

const MobNav = ({handleSidebar}) => {
  return (
    <nav className="nav">
      <Hamburger className="nav__burger" onClick={handleSidebar}/>
      <Logo className="nav__logo" />
      <ul className="nav-links">
        {navigationData.map(n => {
          return (
            <li key={n.id} className="nav-link">
              <button className="nav-link__btn">{n.link}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobNav