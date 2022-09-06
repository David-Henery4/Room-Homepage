import React, { useEffect, useState } from "react";
import { textAndImages } from "../image-arrays/images";
import aboutTopImg from "../images/image-about-dark.jpg";
import aboutBottonImg from "../images/image-about-light.jpg";
import {
  HeaderInfo,
  HeroImage,
  MobNav,
  Overlay,
  Sidenav,
  SliderNav,
} from "../components";

const AppWrap = () => {
  const [slider, setSlider] = useState(0);
  const [isSidebar, setIsSidebar] = useState(false);
  //
  const incrementSider = () => {
    setSlider(slider + 1);
  };
  //
  const deincrementSider = () => {
    setSlider(slider - 1);
  };
  //
  const handleKeyCheck = (e) => {
    if (e.key === "ArrowRight") {
      incrementSider();
    }
    if (e.key === "ArrowLeft") {
      deincrementSider();
    }
  };
  //
  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  //
  useEffect(() => {
    window.addEventListener("keyup", handleKeyCheck);
    return () => window.removeEventListener("keyup", handleKeyCheck);
    // eslint-disable-next-line
  }, [slider]);
  //
  useEffect(() => {
    if (slider > textAndImages.length - 1) {
      setSlider((i) => (i = 0));
    }
    if (slider < 0) {
      setSlider((i) => (i = textAndImages.length - 1));
    }
  }, [slider]);
  return (
    <main className="main app-grid">
      <MobNav handleSidebar={handleSidebar} />
      <Sidenav isSidebar={isSidebar} handleSidebar={handleSidebar} />
      <Overlay isSidebar={isSidebar} />
      <HeroImage slider={slider} />
      <SliderNav
        deincrementSider={deincrementSider}
        incrementSider={incrementSider}
      />
      <HeaderInfo slider={slider} />
      <div className="about-img1">
        <img className="about-img1__img" src={aboutTopImg} alt="about-img-1" />
      </div>
      <div className="about-info">
        <h2 className="about-info__title">About our furniture</h2>
        <p className="about-info__text">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="about-img2">
        <img
          className="about-img2__img"
          src={aboutBottonImg}
          alt="about-img-2"
        />
      </div>
    </main>
  );
};

export default AppWrap;
