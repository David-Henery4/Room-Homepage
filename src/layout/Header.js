import React, { useEffect, useState } from "react";
import { MobNav, Sidenav } from "../components";
import {IconLeft, IconRight, Arrow} from "../svgs";
import {textAndImages } from "../image-arrays/images";


const Header = () => {
  const [slider, setSlider] = useState(0)
  const [isSidebar, setIsSidebar] = useState(false)
  //
  const incrementSider = () => {
    setSlider(slider + 1)
  }
  //
  const deincrementSider = () => {
    setSlider(slider - 1)
  }
  //
  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
    console.log("clicked")
  }
  //
  useEffect(() => {
    if (slider > textAndImages.length - 1) {
      setSlider( (i) => i = 0);
    }
    if (slider < 0) {
      setSlider((i) => i = textAndImages.length - 1);
    }
  }, [slider])
  //
  return (
    <main className="header header-grid">
      <MobNav handleSidebar={handleSidebar} />
      <Sidenav isSidebar={isSidebar} handleSidebar={handleSidebar} />
      <section className="header-img">
        <picture>
          <source
            srcSet={textAndImages[slider] && textAndImages[slider].deskImg}
            media="(min-width: 28.12em)"
          />
          <img
            className="header-hero-img"
            src={textAndImages[slider] && textAndImages[slider].mobImg}
            alt="hero-img"
          />
        </picture>
      </section>
      <div className="header-slider-nav">
        <div className="header-slider-icon-wrap">
          <IconLeft
            className="header-slider__icon"
            onClick={deincrementSider}
          />
        </div>
        <div className="header-slider-icon-wrap">
          <IconRight className="header-slider__icon" onClick={incrementSider} />
        </div>
      </div>
      <section className="header-info">
        <h1 className="header__title">
          {textAndImages[slider] && textAndImages[slider].title}
        </h1>
        <p className="header__text">
          {textAndImages[slider] && textAndImages[slider].text}
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
