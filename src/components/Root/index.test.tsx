import { render } from "@testing-library/react";
import Root from "./index";

test("it renders", () => {
  expect(() => {
    render(<Root />);
  }).not.toThrow();
});
