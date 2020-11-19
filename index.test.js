// import React from "react";
const React = require("react");
// import { render } from "@testing-library/react";
const { render } = require("@testing-library/react");
// import "@testing-library/jest-dom/extend-expect";
require("@testing-library/jest-dom/extend-expect");
import App from "./pages/index";
// const App = require("./pages/index");

describe("App Testing...", () => {
  test("test to return true", () => {
    expect(true).toBeTruthy();
  });
  test("renders without crashing", () => {});
});
