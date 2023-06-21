import { useForm } from "react-hook-form";
import { faker, render, screen } from "test-utils";
import ProfileForm, { FormType, ProfileFormProps } from "./index";

const page = {
  get submitButton() {
    return screen.getByText("Submit");
  },
  get emailField() {
    return screen.getByRole("textbox", { name: /email/i });
  },
};

function Wrapper({ onSubmit }: Pick<ProfileFormProps, "onSubmit">) {
  const form = useForm<FormType>({
    defaultValues: {
      email: "",
    },
  });

  return <ProfileForm form={form} onSubmit={onSubmit} />;
}

test("do not trigger a submit action for an invalid form", async () => {
  const handleSubmit = jest.fn();

  const { user } = render(<Wrapper onSubmit={handleSubmit} />);

  await user.click(page.submitButton);

  expect(handleSubmit).not.toBeCalled();
});

test("trigger a submit action for a valid form", async () => {
  const handleSubmit = jest.fn();

  const { user } = render(<Wrapper onSubmit={handleSubmit} />);

  await user.type(page.emailField, faker.internet.email());

  await user.click(page.submitButton);

  expect(handleSubmit).toBeCalled();
});
