import { ChangeEvent, FocusEvent, useCallback } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { BaseInputType, TextFieldType } from "../types";
import {
  applyTextValidationOptions,
  transformValidationOptions,
} from "../helpers";
import { InputError } from "../InputError";

export type InputProps<TFieldValues> = Omit<
  TextFieldProps,
  "type" | "name" | "value" | "error" | "inputRef" | "required"
> &
  BaseInputType<TFieldValues> & {
    type: TextFieldType;
  };

export default function Input<TFieldValues extends FieldValues>(
  props: InputProps<TFieldValues>
) {
  const { name, helperText, validation, onChange, onBlur, ...inputProps } =
    props;
  const validationOptions = transformValidationOptions(validation);
  const rules = applyTextValidationOptions(props.type, validationOptions);
  const required = typeof rules.required !== "undefined";

  const { control } = useFormContext<TFieldValues>();
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ control, name, rules });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, valueAsNumber } = event.target;

      if (props.type === "number") {
        field.onChange(valueAsNumber || value);
      } else {
        field.onChange(value);
      }

      if (onChange) {
        onChange(event);
      }
    },
    [field, onChange, props.type]
  );

  const trimValue = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      if (props.type === "number") return;

      const value = event.target.value;
      const trimmedValue = value.trim();

      if (value !== trimmedValue) {
        field.onChange(trimmedValue);
      }
    },
    [field, props.type]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      trimValue(event);
      field.onBlur();

      if (onBlur) {
        onBlur(event);
      }
    },
    [field, onBlur, trimValue]
  );

  return (
    <TextField
      name={field.name}
      value={field.value}
      onChange={handleChange}
      onBlur={handleBlur}
      inputRef={field.ref}
      error={invalid}
      helperText={
        invalid ? <InputError name={name} errors={errors} /> : helperText
      }
      required={required}
      {...inputProps}
    />
  );
}

Input.defaultProps = {
  fullWidth: true,
};
