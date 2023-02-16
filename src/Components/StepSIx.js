import React from "react";
import {
  Container,
  Button,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { styled } from "@mui/system";
// import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const SectionPage = styled("div")({
  padding: "60px 0px",
  width: "100%",
});

const Center = styled("div")({
  textAlign: "center",
});

const FlexRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Wrapper = styled("div")({
  padding: "35px 0",
});

const Minimize = styled("div")({
  width: "calc(100% - 70px)",
});

const StepSix = () => {
  const navigate = useNavigate();

  return (
    <SectionPage>
      <Container fixed>
        <Grid container spacing={2} mt={2}>
          <div
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
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
              <Typography>Step 6/8</Typography>
            </Center>
          </Grid>
        </Grid>

        <Wrapper className="sixWrapper">
          <FlexRow>
            <div style={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Typography sx={{ marginBottom: "15px" }}>
                    Specify your digital asset name
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Bitcoin
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Bitcoin"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Typography sx={{ marginBottom: "15px" }}>
                    Specify the custodian name
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Custodian Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                  <Typography sx={{ marginBottom: "15px" }}>
                    Specify the wallet address
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Address"
                    variant="outlined"
                    // value={value}
                    // onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Button
                type="button"
                sx={{ marginTop: "25px", marginLeft: "5px" }}
              >
                <AddIcon />
              </Button>
            </div>
          </FlexRow>

          <Minimize>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <TextField
                  id="outlined-basic"
                  label="Custodian Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Wallet Address"
                  variant="outlined"
                  // value={value}
                  // onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Minimize>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I don't hold any digital currency"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Wrapper>

        <Center sx={{ marginTop: "35px" }}>
          <Button type="button" variant="contained" className="defaultBtn">
            Next
          </Button>
        </Center>
      </Container>
    </SectionPage>
  );
};

export default StepSix;
