import { PropsWithChildren } from "react";
import { Cookies, CookiesProvider } from "react-cookie";

export interface ProvidersProps {
  universalCookies?: Cookies;
}

export function Providers(props: PropsWithChildren<ProvidersProps>) {
  const { universalCookies, children } = props;

  return (
    <CookiesProvider cookies={universalCookies}>{children}</CookiesProvider>
  );
}
