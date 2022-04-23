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
import { FormControlLabel } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from "../templates/Parent_Sidebar";
import backgroundImage from "../images/therapist.jpg";
import Dialog from "@material-ui/core/Dialog";
export default function Parent_grades_page() {
    if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Parent") {
        window.location.href = "/signin";
    }

    const [all_grades, set_all_grades] = useState([]);



    useEffect(() => {

        const parent_detail = {
            Parent_id: String(localStorage.getItem("id")),
        };

        axios
            .post("/api/grade/get_child_grade", parent_detail)
            .then((response) => {
                if (response.status == 200) {
                    set_all_grades(response.data);
                    console.log(response.data);
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
                <Sidebar />
            </Box><br></br>

            {all_grades === "" ? (<> No grades done </>) : (<>
                <h2 align="center" style = {{
        color: '#986cab',
        fontSize: '30px',
        fontFamily: 'Montserrat',
      }}>Your Received Grades</h2>
                {all_grades.map(item => (
                    <>
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}
                        style={{
                            opacity: 0.8,
                            backgroundColor: "#e5d7f5",
                          }}
                          >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                Therapist Name : {item["Therapist_name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Activity : {item["Activity_name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Grade : {item["grade_letter"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Comments : {item["Comment_text"]}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <br></br>
                    </> 
                ))}
            </>)}
        </>
        </div>)
}
