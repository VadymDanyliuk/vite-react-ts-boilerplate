import { PropsWithChildren, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  render as originalRender,
  RenderOptions,
} from "@testing-library/react";
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
  return originalRender(ui, { wrapper: CustomRoot, ...options });
}

export * from "@faker-js/faker";
export * from "@testing-library/react";

export function render(ui: ReactElement, options?: RenderOptions) {
  return {
    user: userEvent.setup(),
    ...customRender(ui, options),
  };
}
