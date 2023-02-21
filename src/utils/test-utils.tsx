import { PropsWithChildren, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Providers } from "../components/Providers";

function CustomProviders({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <Providers>{children}</Providers>
    </BrowserRouter>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, { wrapper: CustomProviders, ...options });
};

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return {
    user: userEvent.setup(),
    ...customRender(ui, options),
  };
}

export * from "@testing-library/react";
export { customRender as render };
