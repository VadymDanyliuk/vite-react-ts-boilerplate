import { PropsWithChildren } from "react";
import Box, { BoxProps } from "@mui/material/Box";

export default function Control(props: PropsWithChildren<BoxProps>) {
  const { children, ...boxProps } = props;

  return <Box {...boxProps}>{children}</Box>;
}

Control.defaultProps = {
  mb: 2,
};
