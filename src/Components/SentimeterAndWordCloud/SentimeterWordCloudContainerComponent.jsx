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
    <div className="geoSentiTime-container">
      <SentimentMeter />
      <div className=" geo-tweet-barchart">
        <div>
          <h2 className="grapheads">word Cloud</h2>
        </div>
        <img
          src={
            "https://previews.123rf.com/images/boris15/boris151411/boris15141100132/33646721-independence-word-cloud-concept-vector-illustration.jpg"
          }
        />
      </div>
    </div>
    // <Grid
    //   container
    //   direction="row"
    //   justifyContent="center"
    //   spacing={2}
    //   xs={12}
    //   sx={{ p: 3 }}
    // >
    //   <Grid item xs={6} spacing={3}>
    //     <Grid container direction="column">
    //       <Grid item sx={6}>
    //         <Stack direction="row" justifyContent={"space-around"}>
    //           <h1>Sentiment Meter</h1>
    //           <FormControl sx={{ width: "160px", my: 4 }}>
    //             <InputLabel id="demo-simple-select-label">
    //               Select-Type
    //             </InputLabel>
    //             <Select
    //               labelId="demo-simple-select-label"
    //               id="demo-simple-select"
    //               value={"all"}
    //               label="Select-type"
    //               onChange={"handleChange"}
    //             >
    //               <MenuItem value={"all"}>All</MenuItem>
    //               <MenuItem value={"Positive"}>positive</MenuItem>
    //               <MenuItem value={"Negative"}>negative</MenuItem>
    //               <MenuItem value={"Neutral"}>neutral</MenuItem>
    //             </Select>
    //           </FormControl>
    //         </Stack>
    //       </Grid>
    //       <Grid item sx={{ mx: 6, p: 3 }}>
    //         <SentimentMeter sx={{ py: 8 }} />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={6} spacing={3}></Grid>
    // </Grid>
  );
}
