import { ChangeEvent, FocusEvent, ReactNode, useCallback } from "react";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MuiSelect, {
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
} from "@mui/material/Select";
import { BaseInputType, SelectBlankOption, SelectOption } from "../types";
import { getSelectBlankOption, transformValidationOptions } from "../helpers";
import { InputError } from "../InputError";

export type SelectProps<TFieldValues, TSelectOption> = Omit<
  MuiSelectProps<HTMLSelectElement>,
  "name" | "required" | "children"
> &
  BaseInputType<TFieldValues> & {
    options: TSelectOption[];
    renderOption?: (option: TSelectOption) => ReactNode;
    blankOption?: SelectBlankOption;
    helperText?: ReactNode;
  };

export default function Select<
  TFieldValues extends FieldValues,
  TSelectOption = SelectOption
>(props: SelectProps<TFieldValues, TSelectOption>) {
  const {
    name,
    options,
    renderOption,
    blankOption,
    validation,
    helperText,
    onChange,
    onBlur,
    ...selectProps
  } = props;
  const rules = transformValidationOptions(validation);
  const required = typeof rules.required !== "undefined";

  const { control } = useFormContext<TFieldValues>();
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({ control, name, rules });

  const handleChange = useCallback(
    (event: SelectChangeEvent<HTMLSelectElement>, child: ReactNode) => {
      field.onChange(event as ChangeEvent);

      if (onChange) {
        onChange(event, child);
      }
    },
    [field, onChange]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      field.onBlur();

      if (onBlur) {
        onBlur(event);
      }
    },
    [field, onBlur]
  );

  const handleRenderOption = useCallback(
    (selectOption: unknown) => {
      if (renderOption) {
        return renderOption(selectOption as TSelectOption);
      }

      const option = selectOption as SelectOption;

      return (
        <MenuItem key={String(option.value)} value={option.value}>
          {option.label}
        </MenuItem>
      );
    },
    [renderOption]
  );

  const blankOptionItem = getSelectBlankOption(blankOption, !!rules.required);

  return (
    <FormControl fullWidth={selectProps.fullWidth}>
      <InputLabel required={required}>{selectProps.label}</InputLabel>
      <MuiSelect
        name={field.name}
        value={field.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputRef={field.ref}
        error={invalid}
        required={required}
        {...selectProps}
      >
        {blankOptionItem && (
          <MenuItem value={blankOptionItem.value}>
            {blankOptionItem.label}
          </MenuItem>
        )}
        {options.map(handleRenderOption)}
      </MuiSelect>
      {(invalid || helperText) && (
        <FormHelperText>
          {invalid ? <InputError name={name} errors={errors} /> : helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

Select.defaultProps = {
  fullWidth: true,
};
