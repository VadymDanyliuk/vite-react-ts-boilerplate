import { FieldValues } from "react-hook-form";
import Input, { InputProps } from "../Input";

export type TextareaProps<TFieldValues> = Omit<
  InputProps<TFieldValues>,
  "type" | "multiline"
>;

export default function Textarea<TFieldValues extends FieldValues>(
  props: TextareaProps<TFieldValues>,
) {
  return <Input type="text" multiline {...props} />;
}

Textarea.defaultProps = {
  rows: 3,
};
