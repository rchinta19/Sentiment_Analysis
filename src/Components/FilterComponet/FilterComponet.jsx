import React, { useState, useEffect, useMemo } from "react";
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
import moment from "moment";
// Table row
import { cities, state, countryList } from "../../citiesandstates";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
// table Body
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { allTweet } from "../../features/TweetSlice";
import { useSelector, useDispatch } from "react-redux";
function FilterComponet() {
  const currentDay = new Date();
  const [value, setValue] = React.useState([null, null]);

  const date = new Date();

  const allTweet = useSelector((state) => state.alltweet.value);
  const [formInputValues, setFormInputValues] = useState({
    gender: "All",
    startDate: moment(date).format("l"),
    startTime: date,
    endDate: moment(date).format("l"),
    endTime: date,
    country: "All",
    city: "All",
    type: "All",
    device: "All",
  });
  const formInputHandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "male":
        setFormInputValues((prev) => ({ ...prev, male: e.target.value }));
        break;

      case "female":
        setFormInputValues((prev) => ({ ...prev, female: e.target.value }));
        break;
      case "country":
        setFormInputValues((prev) => ({ ...prev, country: e.target.value }));
        break;
      case "city":
        setFormInputValues((prev) => ({ ...prev, city: e.target.value }));
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

  function createData(
    startDateTime,
    endDateTime,
    country,
    city,
    type,
    device,
    gender,
    totalTweets
  ) {
    return {
      startDateTime,
      endDateTime,
      country,
      city,
      type,
      device,
      gender,
      totalTweets,
    };
  }
  const deviceCount = useMemo(() => {
    let sum = 0;
    if (formInputValues.device === "All") {
      Object.keys(allTweet.device).forEach((ele) => {
        sum += allTweet.device[ele];
      });
    }
    return sum;
  }, [formInputValues.device, allTweet]);
const fetchTweetApi = ()=>{
  fetch('http://127.0.0.1:8000/api/filter',{method:"POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(formInputValues)}).then((res)=>{console.log("request sucessful","--===---=",res)
  return res.json()}).then((res)=>{console.log(res.data)}).catch(err=>console.log(err))
}
  const rows = [
    createData(
      formInputValues.startDate,
      formInputValues.endDate,
      formInputValues.country,
      formInputValues.city,
      formInputValues.type,
      formInputValues.device == "All"
        ? deviceCount
        : allTweet.device[formInputValues.device.toLocaleLowerCase()],
      formInputValues.gender,
      allTweet.totaltweets.total
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
                    startDate: newValue.format("l"),
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
                format="DD-MM-YYYY"
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
                  setFormInputValues((prev) => ({
                    ...prev,
                    startTime: newValue,
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
                format="HH:mm:ss"
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
                    endDate: newValue.format("l"),
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
                format="DD/MM/YYYY"
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
                    endTime: newValue,
                  }));
                }}
                renderInput={(params) => <TextField {...params} />}
                format="HH:mm:ss"
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
              name="country"
              value={formInputValues.country}
              onChange={formInputHandler}
            >
              {countryList.map((ele, index) => (
                <MenuItem value={ele} key={index}>
                  {ele}
                </MenuItem>
              ))}
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
              value={formInputValues.city}
              name="city"
              onChange={formInputHandler}
            >
              {cities.map((ele, index) => (
                <MenuItem value={ele.name} key={ele}>
                  {ele.name}
                </MenuItem>
              ))}
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
              value={formInputValues.type}
              onChange={(e) => {
                setFormInputValues((prev) => ({
                  ...prev,
                  type: e.target.value,
                }));
              }}
            >
              <MenuItem value={"All"}>All</MenuItem>

              <MenuItem value={"Positive"}>Positive</MenuItem>
              <MenuItem value={"Negative"}>Negative</MenuItem>
              <MenuItem value={"Neutral"}>Neutral</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          label="Device"
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formInputValues.device}
              onChange={(e) => {
                setFormInputValues((prev) => ({
                  ...prev,
                  device: e.target.value,
                }));
              }}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Android"}>Android</MenuItem>
              <MenuItem value={"IOS"}>iOS</MenuItem>
              <MenuItem value={"Web"}>Web</MenuItem>
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
              value={formInputValues.gender}
              onChange={(e) => {
                setFormInputValues((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }));
              }}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          }
          labelPlacement="top"
        />{" "}
        <FormControlLabel
          control={
            <Button
              variant="outlined"
              startIcon={<FilterAltIcon />}
              sx={{ height: "40px" }}
              onClick={() => {
                fetchTweetApi()
                console.log(formInputValues);
              }}
            >
              filter
            </Button>
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
                  {row.startDateTime}
                </TableCell>
                <TableCell align="right">{row.endDateTime}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.device}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.totalTweets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FilterComponet;
