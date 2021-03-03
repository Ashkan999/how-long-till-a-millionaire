import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders welcome text", () => {
  render(<App />);
  const welcomeText = screen.getByText("How Long Till I'm a Millionaire");
  expect(welcomeText).toBeInTheDocument();
});
