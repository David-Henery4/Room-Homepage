import React from "react";
import { textAndImages } from "../image-arrays/images";
import { Arrow } from "../svgs";

const HeaderInfo = ({ slider }) => {
  return (
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
  );
};

export default HeaderInfo;
