import { render, setup, screen } from "test-utils";
import Home from "./index";

test("it renders", () => {
  render(<Home />);

  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});

test("counter works", async () => {
  const { user } = setup(<Home />);
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent(/count is 0/);

  await user.click(button);
  await user.click(button);

  expect(button).toHaveTextContent(/count is 2/);
});
