import React from "react";
import { IconLeft, IconRight } from "../svgs";

const SliderNav = ({ deincrementSider, incrementSider }) => {
  return (
    <div className="header-slider-nav">
      <div
        className="header-slider-nav-slider-icon-wrap"
        onClick={deincrementSider}
      >
        <IconLeft className="header-slider-nav-slider__icon" />
      </div>
      <div
        className="header-slider-nav-slider-icon-wrap"
        onClick={incrementSider}
      >
        <IconRight className="header-slider-nav-slider__icon" />
      </div>
    </div>
  );
};

export default SliderNav;
