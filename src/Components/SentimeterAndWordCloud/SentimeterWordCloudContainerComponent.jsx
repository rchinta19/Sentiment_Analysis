import React from "react";
import Grid from "@mui/material/Grid";
// import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SentimentMeter from "./SentimeterComponent/SentimentMeter";
export default function SentimeterWordCloudContainerComponent() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={2}
      xs={12}
      sx={{ p: 3 }}
    >
      <Grid item xs={6} spacing={3}>
        <Grid container direction="column">
          <Grid item sx={6}>
            <Stack direction="row" justifyContent={"space-around"}>
              <h1>Sentiment Meter</h1>
              <FormControl sx={{ width: "160px", my: 4 }}>
                <InputLabel id="demo-simple-select-label">
                  Select-Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"LastWeek"}
                  label="Select-type"
                  onChange={"handleChange"}
                >
                  <MenuItem value={10}>Last Week</MenuItem>
                  <MenuItem value={20}>Last Month</MenuItem>
                  <MenuItem value={30}>This year</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item sx={{ mx: 6, p: 3 }}>
            <SentimentMeter sx={{ py: 8 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} spacing={3}>
        <Grid container direction="column">
          <Grid item sx={6}>
            <Stack direction="row" justifyContent={"space-between"}>
              <h1>Sentiment Meter</h1>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"LastWeek"}
                  label="Age"
                  onChange={"handleChange"}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item sx={{ mx: 6, p: 3 }}>
            <SentimentMeter sx={{ py: 8 }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
