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
export default function Activities_page() {
    if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Therapist") {
        window.location.href = "/signin";
    }

    const [is_add, set_isadd] = useState(false);

    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Intensity, setIntensity] = useState("");
    const [all_activity, set_all_activity] = useState([]);
    const change_isadd = (event) => {
        set_isadd(true);
    };
    const onChangeintensity = (event) => {
        setIntensity(event.target.value);
    };
    const onChangeName = (event) => {
        setName(event.target.value);
    };
    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const addActivity = (event) => {
        event.preventDefault();
        const new_activity = {
            Therapist_id: String(localStorage.getItem("id")),
            Name: Name,
            Description: Description,
            Intensity: Intensity,
        };

        axios
            .post("http://localhost:4000/activity/create_activity", new_activity)
            .then((response) => {
                if (response.status == 404) {
                    alert("Already Exists");
                }
                else if (response.status == 200) {
                    alert("Activity Added");
                }
                else {
                    alert("Error adding activity");
                    console.log(new_activity)
                }
                window.location.reload();
            });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Activity', headerName: 'Activity', width: 130 },
        { field: 'Intensity', headerName: 'Intensity', width: 130 },
        {
            field: 'Description',
            headerName: 'Description',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
    ];
    let rows = []
    useEffect(() => {

        const therapist_detail = {
            Therapist_id: String(localStorage.getItem("id")),
        };

        axios
            .post("http://localhost:4000/activity/get_activity",therapist_detail)
            .then((response) => {
                if (response.status == 200) {
                    set_all_activity(response.data);
                }
            });
    }, []);

    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];

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
                            Therapist Portal
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button color="inherit" onClick={() => window.location.href = "/t_home"}>
                            Home
                        </Button>
                        <Button color="inherit" onClick={() => window.location.href = "/t_grade"}>
                            Grade
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
            <div className="App" align="center">
                <Button
                    type="submit"
                    width="50%"
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    onClick={change_isadd}
                >
                    Add Activity
                </Button>
                {is_add == true ?
                    (
                        <>
                            <br></br>

                            <Typography variant="h5">NEW ACTIVITY</Typography>
                            <form>

                                <br />
                                <TextField
                                    style={{ width: "200px", margin: "5px" }}
                                    type="text"
                                    label="Name"
                                    variant="outlined"
                                    id="email"

                                    name="Name"
                                    autoComplete="Name"
                                    autoFocus
                                    value={Name}
                                    onChange={onChangeName}
                                />
                                <br /><br />
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Intensity</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={Intensity}
                                        label="Intensity"
                                        onChange={onChangeintensity}
                                    >
                                        <MenuItem value="Low">Low</MenuItem>
                                        <MenuItem value="Moderate">Moderate</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                    </Select>
                                </FormControl>
                                <br /><br />
                                <TextField
                                    style={{ width: "400px", margin: "5px" }}
                                    type="text"
                                    label="Description of Activity"
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    name="Description"
                                    autoComplete="Description of Activity"
                                    autoFocus
                                    value={Description}
                                    onChange={onChangeDescription}
                                />
                                <br />
                                <Button variant="contained" color="primary" onClick={addActivity}>
                                    Submit
                                </Button>
                            </form>

                        </>
                    ) : (<></>)


                }
            </div>
            {all_activity === "" ? (<></>) : (<>

                {all_activity.map(item => (
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
                                                Intensity : {item["Intensity"]}
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Description : {item["Description"]}
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
