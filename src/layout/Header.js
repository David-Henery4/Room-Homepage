import React, { useEffect, useState } from "react";
import { MobNav, Sidenav, HeroImage, SliderNav, HeaderInfo } from "../components";
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
      <HeroImage slider={slider} />
      <SliderNav
        deincrementSider={deincrementSider}
        incrementSider={incrementSider}
      />
      <HeaderInfo slider={slider}/>
    </main>
  );
};

export default Header;
