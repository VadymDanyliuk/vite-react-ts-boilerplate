import { HTMLAttributes, PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import cn from "classnames";
import s from "./Layout.module.css";

export interface LayoutProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  title: string;
}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  const { title, className, children } = props;

  return (
    <div className={cn(s.wrapper, className)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className={s.main}>{children}</main>
    </div>
  );
}
