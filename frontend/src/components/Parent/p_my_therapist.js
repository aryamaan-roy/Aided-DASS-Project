import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Rating from '@mui/material/Rating';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";

export default function Parent_my_therapists() {
  if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Parent") {
    window.location.href = "/signin";
  }

  const [all_therapists, set_all_therapists] = useState([]);
  useEffect(() => {
    const parent_info = {
      Parent_id: String(localStorage.getItem("id")),
  };
    axios
    .post("http://localhost:4000/link/get_therapists",parent_info).then((response) => {
        if (response.status == 200) {
            set_all_therapists(response.data);
            console.log(all_therapists);
        }
    });

}, []);

  


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ cursor: "pointer" }}
              onClick={() => window.location.href = "/"}
            >
              Parent Portal
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={() => window.location.href = "/p_home"}>
              Home
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/p_my_therapist"}>
              My Therapists
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/p_home"}>
              Grades
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/register"}>
              Register
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/signin"}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box><br></br><br></br>
      <h1 align = "center">My Chosen Therapists</h1>
      <div className="App" align="center">
      {all_therapists === "" ? (<> No therapists </>) : (<>
                {all_therapists.map(item => (
                    <>
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                Name : {item["Name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Qualification : {item["Qualification"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Experience : {item["Experience"]}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </>
                ))}
            </>)}</div>
    </>
  );
}