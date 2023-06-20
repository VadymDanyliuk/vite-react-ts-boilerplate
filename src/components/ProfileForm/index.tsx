import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import Form from "../Form";
import Control from "../formElements/Control";
import Button from "../formElements/Button";
import Input from "../formElements/Input";
import Textarea from "../formElements/Textarea";
// import Select from "../formElements/Select";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  bio: string;
}

export type FormType = Profile;

export interface ProfileFormProps {
  form: UseFormReturn<FormType>;
  onSubmit: SubmitHandler<FormType>;
  onError?: SubmitErrorHandler<FormType>;
}

export default function ProfileForm(props: ProfileFormProps) {
  const { form, onSubmit, onError } = props;

  return (
    <Form<FormType> form={form} onSubmit={onSubmit} onError={onError}>
      <Control>
        <Input<FormType> type="text" name="firstName" label="Forename" />
      </Control>
      <Control>
        <Input<FormType> type="text" name="lastName" label="Surname" />
      </Control>
      <Control>
        <Input<FormType> type="number" name="age" label="Age" />
      </Control>
      <Control>
        <Input<FormType>
          type="email"
          name="email"
          label="Email"
          validation={{ required: true }}
        />
      </Control>
      <Control>
        <Textarea<FormType> name="bio" label="Bio" />
      </Control>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
