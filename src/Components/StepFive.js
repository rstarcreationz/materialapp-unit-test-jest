import React from "react";
import { Container, Button, Typography, Grid, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { styled } from "@mui/system";
// import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const SectionPage = styled("div")({
  padding: "60px 0px",
  width: "100%",
});

const Center = styled("div")({
  textAlign: "center",
});

const MuiDiv = styled("div")({
  margin: "20px 0",
});

const CenterArea = styled("div")({
  display: "flex",
  width: "100%",
  maxWidth: "70%",
  margin: "auto",
  flexWrap: "wrap",
});

const StepFive = () => {
  return (
    <SectionPage>
      <Container fixed>
        <Grid container spacing={2} mt={2}>
          <div style={{ marginLeft: "10px" }}>
            <ArrowBackIosIcon />
          </div>

          <Grid
            item
            xs={10}
            sm={10}
            xl={11}
            lg={11}
            md={11}
            className="removepadding"
          >
            <Center>
              <Typography className="res-text" variant="h6" component="div">
                Digital assets onboarding
              </Typography>
              <Typography>Step 5/8</Typography>
            </Center>
          </Grid>
        </Grid>

        <MuiDiv className="headingarea" sx={{ marginTop: "35px" }}>
          <Center>
            <Typography
              className="res-heading"
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              How were the assets generated that are being initially transferred
              ?
            </Typography>
            <Typography sx={{ margin: "15px 0" }}>
              (Select all that apply)
            </Typography>
          </Center>
        </MuiDiv>

        <CenterArea className="res-center-area invisible-checkboxes">
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="1" id="r1" />
              <label className="checkbox-alias" for="r1">
                <span>
                  <CheckCircleIcon />
                </span>
                Employment Income
              </label>
            </Grid>
            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r2" />
              <label className="checkbox-alias" for="r2">
                <span>
                  <CheckCircleIcon />
                </span>
                Saving/Deposits
              </label>
            </Grid>

            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r3" />
              <label className="checkbox-alias" for="r3">
                <span>
                  <CheckCircleIcon />
                </span>
                Sale of share or other investment
              </label>
            </Grid>

            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r4" />
              <label className="checkbox-alias" for="r4">
                <span>
                  <CheckCircleIcon />
                </span>
                Loan
              </label>
            </Grid>

            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r5" />
              <label className="checkbox-alias" for="r5">
                <span>
                  <CheckCircleIcon />
                </span>
                Company sale
              </label>
            </Grid>

            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r6" />
              <label className="checkbox-alias" for="r6">
                <span>
                  <CheckCircleIcon />
                </span>
                company profits/dividens
              </label>
            </Grid>
            <Grid item xs={12} xl={6} lg={6} md={6}>
              <input type="checkbox" name="rGroup" value="2" id="r7" />
              <label className="checkbox-alias" for="r7">
                <span>
                  <CheckCircleIcon />
                </span>
                Inheritance
              </label>
            </Grid>
          </Grid>
        </CenterArea>

        <Center sx={{ marginTop: "45px" }}>
          <Button
            component={Link}
            to="/step-six"
            type="button"
            variant="contained"
            className="defaultBtn"
          >
            Next
          </Button>

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={7}>
              <TextField
                autoComplete="off"
                fullWidth
                type="email"
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
                sx={{ mt: 3 }}
              />
              <TextField
                sx={{ my: 3 }}
                fullWidth
                autoComplete="new-password"
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="Password"
              />
            </Grid>
          </Grid>

          <Button
            type="button"
            variant="contained"
            className="defaultBtn"
            data-testid="submit"
          >
            submit
          </Button>
          <Button
            type="button"
            variant="contained"
            className="defaultBtn"
            data-testid="reset"
          >
            Reset
          </Button>
        </Center>
      </Container>
    </SectionPage>
  );
};

export default StepFive;
