import type {
  SelectBlankOption,
  TextFieldType,
  ValidationOptions,
} from "../types";
import { EMPTY_SELECT_OPTION_VALUE } from "../constants";

export function transformValidationOptions(options: ValidationOptions = {}) {
  const rules = { ...options };

  if (rules.required === true) {
    rules.required = "Required";
  }

  if (typeof rules.min === "number") {
    rules.min = {
      value: rules.min,
      message: `No less than ${rules.min} characters`,
    };
  }

  if (typeof rules.max === "number") {
    rules.max = {
      value: rules.max,
      message: `No more than ${rules.max} characters`,
    };
  }

  return rules;
}

export function applyTextValidationOptions(
  type: TextFieldType,
  options: ValidationOptions = {}
) {
  const rules = { ...options };

  switch (type) {
    case "text":
      rules.setValueAs = (value: string) => value.trim();
      break;

    case "number":
      rules.valueAsNumber = true;
      break;

    case "email":
      rules.validate = {
        isEmail(value: string) {
          if (value && value.indexOf("@") === -1) {
            return "Invalid email address";
          }
        },
        ...rules.validate,
      };
      break;

    default:
      break;
  }

  return rules;
}

export function getSelectBlankOption(
  blankOption: SelectBlankOption,
  required: boolean
) {
  const value = EMPTY_SELECT_OPTION_VALUE;

  // Show a blank option if it's provided
  if (blankOption) {
    return { value, label: blankOption };
  }

  // Do not show a blank option for the required field or in case it explicitly disabled
  if (required || blankOption === false) {
    return null;
  }

  // Show a blank option for not required field
  return { value, label: "None" };
}
