import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import appStekLogo from "../../Assets/Images/logo.svg";

import { TextField } from "@mui/material";
function Header() {
  return (
    <Box sx={{ flexGrow: 1, height: "80" }} className="header-container">
      <Grid container spacing={3} flexDirection="row" justifyContent="center">
        <Grid item xs={3}>
          <Box>
            <img src={appStekLogo} alt="AppstekCorp" className="appstek-logo" />
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ textAlign: "left" }}>
          <p className="heading">Twitter Sentiment Analysis</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
