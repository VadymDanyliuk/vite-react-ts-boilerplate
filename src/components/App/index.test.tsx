import { render } from "test-utils";
import App from "./index";

test("it renders", () => {
  expect(() => {
    render(<App />);
  }).not.toThrow();
});
