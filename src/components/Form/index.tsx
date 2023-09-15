import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export interface FormProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  onError?: SubmitErrorHandler<TFormValues>;
}

export default function Form<TFormValues extends FieldValues>(
  props: PropsWithChildren<FormProps<TFormValues>>,
) {
  const { form, onSubmit, onError, children } = props;

  return (
    <FormProvider {...form}>
      <form
        noValidate
        autoComplete="off"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit, onError)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
