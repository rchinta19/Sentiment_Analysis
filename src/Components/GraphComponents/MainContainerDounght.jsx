import React from "react";
import Grid from "@mui/material/Grid";
import { InputBase } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import DonughtChartAllTweets from "./DonughtChartAllTweets";

function MainContainerDounght() {
  const handleChange = () => {};
  return (
    <Grid container direction="column" alignItems="center" spacing={2} className="main-donught-container">
      <Grid item xs={12} sx={{ width: "450px" }}>
        <OutlinedInput
          fullWidth
          id="Outlined-text"
          type={"text"}
          value={"Search for #tags"}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon aria-label="toggle password visibility" edge="end" />
            </InputAdornment>
          }
          label="Password"
        />
      </Grid>
      <Grid item>
        <h1>#something</h1>
      </Grid>
      <Grid item>
        <h2>Start date & time - End date & time</h2>
      </Grid>
      <Grid item>
        <h4>Total Tweets & Analyzed Tweets</h4>
      </Grid>
      <Grid item fullWidth xs={12} width="70vw">
        <DonughtChartAllTweets />
      </Grid>
    </Grid>
  );
}

export default MainContainerDounght;