import { PropsWithChildren } from "react";

export default function StringToJSX(props: PropsWithChildren) {
  const { children } = props;

  if (typeof children === "string") {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <>{children}</>;
}
