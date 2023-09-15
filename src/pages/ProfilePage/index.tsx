import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Layout from "../../components/layouts/Layout";
import ProfileForm, { ProfileFormType } from "../../components/ProfileForm";

type FormType = ProfileFormType;

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: 18,
  bio: "",
};

export default function ProfilePage() {
  const form = useForm<FormType>({
    defaultValues,
  });

  const handleSubmit: SubmitHandler<FormType> = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <Layout title="React Hook Form + Material UI">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ pt: 10 }}
      >
        <Grid item xs={8}>
          <ProfileForm form={form} onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </Layout>
  );
}
