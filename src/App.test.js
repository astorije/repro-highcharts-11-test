import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders a chart", () => {
  render(<App />);
  const chart = screen.getByText(/my chart/i);
  expect(chart).toBeInTheDocument();
});
