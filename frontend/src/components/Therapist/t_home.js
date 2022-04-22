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
import Sidebar from "../templates/Therapist_Sidebar";
import backgroundImage from '../images/therapist.jpg';
import SearchIcon from "@mui/icons-material/Search";

export default function Therapist_home() {
  if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Therapist") {
    window.location.href = "/signin";
  }

  const [all_links, set_all_links] = useState([]);
  const [child_detail, set_child_detail] = useState([]);

  useEffect(() => {
    const therapist_info = {
      Therapist_id: String(localStorage.getItem("id")),
    };
    axios
      .post("http://localhost:4000/link/get_children", therapist_info).then((response) => {
        if (response.status == 200) {
          set_all_links(response.data);
          console.log(all_links);
        }
      });

  }, []);

  return (
    <div style = {{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    }}
    >
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Sidebar/>
        {/* <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ cursor: "pointer" }}
              onClick={() => window.location.href = "/"}
            >
              Therapist Portal
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={() => window.location.href = "/t_home"}>
              Home
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/t_grade"}>
              Grade
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/t_message"}>
              Messages
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/t_activity"}>
              Activities
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/register"}>
              Register
            </Button>
            <Button color="inherit" onClick={() => window.location.href = "/signin"}>
              Logout
            </Button>
          </Toolbar>
        </AppBar> */}
      </Box><br></br>
      <h1 align="center"  style = {{
        color: '#986cab',
        fontSize: '30px',
        fontFamily: 'Montserrat',
      }}>Children under you</h1>
      <div className="App" align="center">
        {all_links === "" ? (<> No therapists </>) : (<>
          {all_links.map(item => (
            <>
              <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }} style = {{
                opacity: 0.8,
                backgroundColor: '#e5d7f5',
              }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Child Name : {item["Child_name"]}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <br></br>
            </>
          ))}
        </>)}</div>
    </>
    </div>
  );
}