import { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Cookies, CookiesProvider } from "react-cookie";

export interface RootProps {
  universalCookies?: Cookies;
}

export default function Root(props: PropsWithChildren<RootProps>) {
  const { universalCookies, children } = props;

  return (
    <HelmetProvider>
      <CookiesProvider cookies={universalCookies}>{children}</CookiesProvider>
    </HelmetProvider>
  );
}
