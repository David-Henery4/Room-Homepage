import React from "react";
import { MobNav } from "../components";
import {IconLeft, IconRight, Arrow} from "../svgs";
import heroImg from "../images/mobile-image-hero-1.jpg";


const Header = () => {
  return (
    <main className="header">
      <MobNav />
      <section className="header-img">
        <img src={heroImg} alt="hero-img" />
      </section>
      <div className="slider-nav">
        <IconLeft/>
        <IconRight />
      </div>
      <section className="header-info">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="header-cta">
          <p>SHOP NOW</p>
          <Arrow/>
        </div>
      </section>
    </main>
  );
};

export default Header;
