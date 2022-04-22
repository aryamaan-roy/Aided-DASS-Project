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
export default function Therapist_message_page() {
    if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Therapist") {
        window.location.href = "/signin";
    }


    const [Reply_text, set_reply] = useState("");
    const [current_child_name, set_child_name] = useState("");
    const [all_messages, set_all_messages] = useState([]);
    const [is_add, set_isadd] = useState(false);
    const [all_links, set_all_links] = useState([]);
    const change_isadd = (event) => {
        set_isadd(true);
    };

    const onChangechild = (e) => {
        set_child_name(e.target.value);
    }

    const onChangereply = (e) => {
        set_reply(e.target.value);
    }


    useEffect(() => {

        const Therapist_detail = {
            Therapist_id: String(localStorage.getItem("id")),
        };

        axios
            .post("http://localhost:4000/message/get_therapist_messages", Therapist_detail)
            .then((response) => {
                if (response.status == 200) {
                    set_all_messages(response.data);
                    console.log(all_messages);
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
                        <Button color="inherit" onClick={() => window.location.href = "/t_home"}>
                            Home
                        </Button>
                        <Button color="inherit" onClick={() => window.location.href = "/t_grade"}>
                            Grade
                        </Button>
                        <Button color="inherit" onClick={() => window.location.href = "/t_message"}>
                            Messages
                        </Button>
                        <Button color="inherit" onClick={() => window.location.href = "/t_home"}>
                            Activities
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
    
            {all_messages === "" ? (<> No messages </>) : (<>
                <h2 align="center">Your messages</h2>
                {all_messages.map(item => (
                    <>
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                From : {item["Parent_name"]}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                Child Name : {item["Child_name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Message : {item["Message_text"]}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </>
                ))}
            </>)}
        </>)
}
