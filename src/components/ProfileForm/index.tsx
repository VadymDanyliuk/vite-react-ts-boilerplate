import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  bio: string;
}

type FormType = Profile;

export default function ProfileForm() {
  const form = useForm<FormType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
    },
  });

  const handleSubmit: SubmitHandler<FormType> = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <Form<FormType> form={form} onSubmit={handleSubmit}>
      <Control>
        <Input<FormType> name="firstName" label="Forename" />
      </Control>
      <Control>
        <Input<FormType> name="lastName" label="Surname" />
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
