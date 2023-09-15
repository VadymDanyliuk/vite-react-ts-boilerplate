import { FieldErrors, FieldName, FieldValues, Path } from "react-hook-form";
import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from "@hookform/error-message";

export interface InputErrorProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

export function InputError<TFieldValues extends FieldValues>(
  props: InputErrorProps<TFieldValues>,
) {
  const { name, errors } = props;

  return (
    <ErrorMessage
      name={
        name as unknown as FieldName<
          FieldValuesFromFieldErrors<FieldErrors<TFieldValues>>
        >
      }
      errors={errors}
    />
  );
}
