import React from 'react'
import {Hamburger, Logo} from "../svgs/index";

const MobNav = () => {
  return (
    <nav className="nav">
      <Hamburger className="nav__burger" />
      <Logo className="nav__logo" />
      <ul className="nav-links">
        <li className="nav-link">
          <button className="nav-link__btn">Home</button>
        </li>
        <li className="nav-link">
          <button className="nav-link__btn">Shop</button>
        </li>
        <li className="nav-link">
          <button className="nav-link__btn">About</button>
        </li>
        <li className="nav-link">
          <button className="nav-link__btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default MobNav