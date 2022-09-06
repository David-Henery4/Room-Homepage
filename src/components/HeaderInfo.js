import React from "react";
import { textAndImages } from "../image-arrays/images";
import { Arrow } from "../svgs";

const HeaderInfo = ({ slider }) => {
  return (
    <section className="header-info">
      <h1 className="header-info__title">
        {textAndImages[slider] && textAndImages[slider].title}
      </h1>
      <p className="header-info__text">
        {textAndImages[slider] && textAndImages[slider].text}
      </p>
      <div className="header-info-cta">
        <p className="header-info-cta__btn">SHOP NOW</p>
        <Arrow className="header-info-cta__arrow" />
      </div>
    </section>
  );
};

export default HeaderInfo;
