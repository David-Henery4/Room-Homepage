import React from 'react'
import {Hamburger, Logo} from "../svgs/index";

const MobNav = () => {
  return (
    <nav className='nav'>
      <Hamburger className='nav__burger'/>
      <Logo className='nav__logo'/>
    </nav>
  )
}

export default MobNav