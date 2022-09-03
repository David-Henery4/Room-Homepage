import React from "react";
import { MobNav } from "../components";
import {IconLeft, IconRight, Arrow} from "../svgs";
import heroImg from "../images/mobile-image-hero-1.jpg";


const Header = () => {
  return (
    <main className="header header-grid">
      <MobNav />
      <section className="header-img">
        <img className="header-hero-img" src={heroImg} alt="hero-img" />
      </section>
      <div className="header-slider-nav">
        <IconLeft className="header-slider__icon" />
        <IconRight className="header-slider__icon" />
      </div>
      <section className="header-info">
        <h1 className="header__title">Discover innovative ways to decorate</h1>
        <p className="header__text">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="header-cta">
          <p className="header-cta__btn">SHOP NOW</p>
          <Arrow className="header-cta__arrow" />
        </div>
      </section>
    </main>
  );
};

export default Header;
