import React from "react";
import AppBar from "@mui/material/AppBar";
import Brightness2SharpIcon from "@mui/icons-material/Brightness2Sharp";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Brightness2SharpIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            NASA APIs
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
