import React from "react";
import { textAndImages } from "../image-arrays/images";

const HeroImage = ({slider}) => {
  return (
    <section className="header-img">
      <picture>
        <source
          srcSet={textAndImages[slider] && textAndImages[slider].deskImg}
          media="(min-width: 28.12em)"
        />
        <img
          className="header-img-hero-img"
          src={textAndImages[slider] && textAndImages[slider].mobImg}
          alt="hero-img"
        />
      </picture>
    </section>
  );
};

export default HeroImage;
