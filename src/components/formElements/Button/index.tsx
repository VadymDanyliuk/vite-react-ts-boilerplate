import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps;

export default function Button(props: ButtonProps) {
  const { children, ...buttonProps } = props;

  return <MuiButton {...buttonProps}>{children}</MuiButton>;
}

Button.defaultProps = {
  type: "button",
  size: "large",
  variant: "contained",
};
