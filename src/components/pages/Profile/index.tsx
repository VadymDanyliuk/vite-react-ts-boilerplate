import Grid from "@mui/material/Grid";
import Layout from "../../layouts/Layout";
import ProfileForm from "../../ProfileForm";

export default function Profile() {
  return (
    <Layout title="React Hook Form + Material UI">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ pt: 10 }}
      >
        <Grid item xs={8}>
          <ProfileForm />
        </Grid>
      </Grid>
    </Layout>
  );
}
