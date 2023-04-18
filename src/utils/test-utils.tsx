import { PropsWithChildren, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Root from "../components/Root";

function CustomRoot({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <Root>{children}</Root>
    </BrowserRouter>
  );
}

function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: CustomRoot, ...options });
}

export function setup(ui: ReactElement, options?: RenderOptions) {
  return {
    user: userEvent.setup(),
    ...customRender(ui, options),
  };
}

export * from "@faker-js/faker";
export * from "@testing-library/react";
export { customRender as render };
