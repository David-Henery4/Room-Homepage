import React from 'react'
import aboutTopImg from "../images/image-about-dark.jpg"
import aboutBottonImg from "../images/image-about-light.jpg"

const Bottom = () => {
  return (
    <section className="about">
      <div className="about-img1">
        <img className="about-img1__img" src={aboutTopImg} alt="about-img-1" />
      </div>
      <div className="about-info">
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="about-img2">
        <img src={aboutBottonImg} alt="about-img-2" />
      </div>
    </section>
  );
}

export default Bottom