import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("How Long Till I'm a Millionaire");
  expect(linkElement).toBeInTheDocument();
});
