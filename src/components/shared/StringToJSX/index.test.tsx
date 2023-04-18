import { render, screen, faker } from "test-utils";
import StringToJSX from "./index";

test("it renders", () => {
  const heading = faker.lorem.text();
  const paragraph = faker.lorem.paragraph();
  const htmlString = `<h1>${heading}</h1><p>${paragraph}</p>`;

  render(<StringToJSX>{htmlString}</StringToJSX>);

  expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  expect(screen.getByText(paragraph)).toBeInTheDocument();
});

test("should render not string arg and not throw", () => {
  const notStringArg = [11, 22, 33];

  render(<StringToJSX>{notStringArg}</StringToJSX>);

  expect(screen.getByText(notStringArg.join(""))).toBeInTheDocument();
});
