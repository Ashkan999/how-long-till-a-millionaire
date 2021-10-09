import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import AboutPage from "../components/about_page/AboutPage";

beforeEach(() => {
  render(<AboutPage />);
});

afterEach(cleanup);

test("AboutPage shows 'About'", () => {
  const aboutTitle = screen.getByText("About");
  expect(aboutTitle).toBeInTheDocument();
  // screen.debug();
});

test("AboutPage shows right text", () => {
  const aboutText = screen.getByText(
    "Also, if you're interesed, the source code of the project is on my github. You can find the link below."
  );
  expect(aboutText).toBeInTheDocument();
});
