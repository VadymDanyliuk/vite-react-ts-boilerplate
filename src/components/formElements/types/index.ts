import type { ReactNode } from "react";
import type { Path, RegisterOptions } from "react-hook-form";
import type { MenuItemProps } from "@mui/material/MenuItem";

export type BaseInputType<TFieldValues> = {
  name: Path<TFieldValues>;
  validation?: ValidationOptions;
};

export type ValidationOptions = RegisterOptions;

export type TextFieldType = "text" | "number" | "email";

export type SelectOption = {
  value: MenuItemProps["value"];
  label: ReactNode;
};

export type SelectBlankOption = ReactNode;
