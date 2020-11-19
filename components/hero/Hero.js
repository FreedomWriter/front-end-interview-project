import React from "react";

import { HeroSection, HeroImage, HeroText } from "./Hero.styles";

export default function Hero() {
  return (
    <HeroSection>
      <HeroImage
        src={require("../../assets/hero.jpg")}
        alt="Frothy beer in a glass, with several beer options"
      />
      <HeroText>
        <h1>Discover Aisle</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,sed do eiusmod
          <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroText>
    </HeroSection>
  );
}
