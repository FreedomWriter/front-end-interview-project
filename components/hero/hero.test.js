import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HeroImage, HeroText } from "./Hero.styles";

test("Hero to be visible", () => {
  const { getByAltText } = render(
    <HeroImage
      src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt="Frothy beer in a glass, with several beer options"
    />
  );
  const image = getByAltText(
    /Frothy beer in a glass, with several beer options/i
  );
  expect(image).toBeVisible();
});

test("Placeholder", () => {
  expect(true).toBe(true);
});
