import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("Header to be visible", () => {
  const { container } = render(<Header />);
  expect(container).toBeVisible();
});

test("Shopping bag icons to be visible", () => {
  const { getByTestId } = render(<Header />);
  const shoppingIcon = getByTestId(/shopping-icon/i);

  expect(shoppingIcon).toBeVisible();
});

test("Links to be visible", () => {
  const { getByText } = render(<Header />);
  const stores = getByText(/Stores/i);
  const contactUs = getByText(/Contact Us/i);

  expect(stores).toBeVisible();
  expect(contactUs).toBeVisible();
});
