import React, { useState, useEffect } from "react";
import "./Filter.modules.css";
import FormGroup from "@mui/material/FormGroup";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// Table row
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// table Body

function FilterComponet() {
  const [value, setValue] = React.useState([null, null]);
  const [formInputValues, setFormInputValues] = useState({
    gender: "Male",
    startDate: "DD/MM/YY",
    startTime: "",
    endDate: new Date.now(),
    endTime: "",
    location: "",
    fromDate: new Date.now(),
    toDate: new Date.now(),
  });
  const formInputHandler = (e) => {
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
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        contrastText: "white",
      },
    },
  });

  function createData(name, calories, fat, carbs, protein, y, k, j) {
    return { name, calories, fat, carbs, protein, y, k, j };
  }

  const rows = [
    createData(
      "dd/mm/yyyy hh:mm",
      "dd/mm/yyyy hh:mm",
      "India",
      "Hyderabad",
      "Positive",
      "Android",
      "Male",
      123213
    ),
  ];
  return (
    <div className="form-container">
      <FormGroup row className="">
        <LocalizationProvider className="lp" dateAdapter={AdapterMoment}>
          <FormControlLabel
            label="start-date"
            control={
              <DatePicker
                className="start-date"
                value={formInputValues.startDate}
                onChange={(newValue) => {
                  setFormInputValues((prev) => ({
                    ...prev,
                    startDate: newValue.format("DD/MM/YY"),
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            }
            labelPlacement="top"
          />
          <FormControlLabel
            label="start-time"
            control={
              <TimePicker
                name="start-time"
                value={formInputValues.startTime}
                onChange={(newValue) => {
                  console.log(newValue.format("HH:mm a"));
                  setFormInputValues((prev) => ({
                    ...prev,
                    startTime: newValue,
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            }
            labelPlacement="top"
          />
          <FormControlLabel
            label="end-date"
            control={
              <DatePicker
                name="end-date"
                value={formInputValues.endDate}
                onChange={(newValue) => {
                  setFormInputValues((prev) => ({
                    ...prev,
                    endDate: newValue.format("DD/MM/YY"),
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            }
            labelPlacement="top"
          />
          <FormControlLabel
            label="end-time"
            control={
              <TimePicker
                name="end-time"
                value={formInputValues.endTime}
                onChange={(newValue) => {
                  setFormInputValues((prev) => ({
                    ...prev,
                    endTime: newValue.format("HH:mm"),
                  }));
                  console.log(formInputValues);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            }
            labelPlacement="top"
          />
        </LocalizationProvider>
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          label="Country"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              onChange={""}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          label="City"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              onChange={""}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          label="Type"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              onChange={""}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          label="device"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              onChange={""}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          label="Gender"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"age"}
              onChange={""}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
      </FormGroup>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Start Date & Time</TableCell>
              <TableCell align="right">End Date & Time</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Device</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Total Tweets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.y}</TableCell>
                <TableCell align="right">{row.j}</TableCell>
                <TableCell align="right">{row.k}</TableCell>
                <TableCell align="right">{row.j}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FilterComponet;
