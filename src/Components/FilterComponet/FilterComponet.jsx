import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
function FilterComponet() {
  const [value, setValue] = React.useState([null, null]);
  const [formInputValues, setFormInputValues] = useState({
    male: false,
    female: false,
    location: "",
    fromDate: Date.now(),
    toDate: Date.now(),
  });
  const formInputHandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "male":
        setFormInputValues((prev) => ({ ...prev, male: !prev.male }));
        break;

      case "female":
        setFormInputValues((prev) => ({ ...prev, female: !prev.female }));
        break;

      default:
        break;
    }
    console.log(formInputValues);
  };
  return (
    <Grid item>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
          justifyContent: { xs: "space-evenly", md: "center" },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            name="from-date"
            label="From-date"
            value={formInputValues.fromDate}
            onChange={(newValue) => {
              // console.log(newValue.format("L,h:mm:ss a"));
              setFormInputValues((prev) => ({
                ...prev,
                fromDate: newValue.format("L,h:mm:ss a"),
              }));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            name="to-date"
            label="to-date"
            value={formInputValues.toDate}
            onChange={(newValue) => {
              // console.log(typeof newValue.format("L,h:mm:ss a"));

              setFormInputValues((prev) => ({
                ...prev,
                toDate: newValue.format("L,h:mm:ss a"),
              }));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          id="gend"
          label="Gender"
          variant="standard"
          onChange={(newValue) => {
            console.log(newValue.target.value);
            setFormInputValues((prev) => ({
              ...prev,
              location: newValue.target.value,
            }));
          }}
        />
        <FormControlLabel
          label="Male"
          control={
            <Checkbox
              onChange={formInputHandler}
              name="male"
              checked={formInputValues.male}
            />
          }
        />
        <FormControlLabel
          label="Female"
          control={
            <Checkbox
              onChange={formInputHandler}
              name="female"
              checked={formInputValues.female}
            />
          }
        />
        <IconButton
          aria-label="delete"
          onClick={() => {
            console.log(formInputValues);
          }}
        >
          <SendRoundedIcon />
        </IconButton>
      </FormGroup>
    </Grid>
  );
}

export default FilterComponet;
