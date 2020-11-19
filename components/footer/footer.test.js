import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("Footer to be visible", () => {
  const { container } = render(<Footer />);
  expect(container).toBeVisible();
});

test("Icons to be visible", () => {
  const { getByTestId } = render(<Footer />);
  const linkIcon = getByTestId(/link-icon/i);
  const instagramIcon = getByTestId(/instagram-icon/i);
  const twitterIcon = getByTestId(/twitter-icon/i);
  const facebookIcon = getByTestId(/facebook-icon/i);
  const emailIcon = getByTestId(/email-icon/i);

  expect(linkIcon).toBeVisible();
  expect(instagramIcon).toBeVisible();
  expect(twitterIcon).toBeVisible();
  expect(facebookIcon).toBeVisible();
  expect(emailIcon).toBeVisible();
});

test("Links to be visible", () => {
  const { getByText } = render(<Footer />);
  const terms = getByText(/Terms of Services/i);
  const privacy = getByText(/Privacy/i);

  expect(terms).toBeVisible();
  expect(privacy).toBeVisible();
});
