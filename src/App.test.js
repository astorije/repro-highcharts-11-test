import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders", async () => {
  render(<App />);

  // This same test fails in Highcharts v11
  expect(
    await screen.findByRole("img", { name: "x, 1, 2." })
  ).toBeInTheDocument();
});
