import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Latest news</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>SideBar</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
