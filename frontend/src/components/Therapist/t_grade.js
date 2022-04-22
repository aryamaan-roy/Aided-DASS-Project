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
import Sidebar from "../templates/Therapist_Sidebar";
import backgroundImage from '../images/therapist.jpg';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog } from '@mui/material';
export default function Grades_page() {
    if (localStorage.getItem("id") === null || localStorage.getItem("choice") != "Therapist") {
        window.location.href = "/signin";
    }

    const [all_activity, set_all_activity] = useState([]);
    const [all_children, set_all_children] = useState([]);


    const [Comment_text, set_Comment] = useState("");
    const [grade, set_grade] = useState("");
    const [current_child_name, set_child_name] = useState("");
    const [current_activity_name, set_activity_name] = useState("");
    const [all_grades, set_all_grades] = useState([]);
    const [is_add, set_isadd] = useState(false);

    const change_isadd = (event) => {
        set_isadd(true);
    };

    const onChange_activity = (e) => {
        set_activity_name(e.target.value);
    }

    const onChange_child = (e) => {
        set_child_name(e.target.value);
    }

    const onChange_grade = (e) => {
        set_grade(e.target.value);
    }
    const onChangecomment = (e) => {
        set_Comment(e.target.value);
    }


    const addGrade = (event) => {
        event.preventDefault();
        const new_grade = {
            Therapist_id: String(localStorage.getItem("id")),
            grade_letter: grade,
            Activity_name: current_activity_name,
            Child_name: current_child_name,
            Comment_text: Comment_text,
        };

        axios
            .post("http://localhost:4000/grade/add_grade", new_grade)
            .then((response) => {
                if (response.status == 404) {
                    alert("Already Exists");
                }
                else if (response.status == 200) {
                    alert("Grade submitted");
                }
                else {
                    alert("Error adding grade");
                    console.log(new_grade);
                }
                window.location.reload();
            });
        setOpen(false);

    };

    useEffect(() => {

        const therapist_detail = {
            Therapist_id: String(localStorage.getItem("id")),
        };

        axios
            .post("http://localhost:4000/grade/get_grade", therapist_detail)
            .then((response) => {
                if (response.status == 200) {
                    set_all_grades(response.data);
                    console.log(response.data);
                }
            });

        axios
            .post("http://localhost:4000/link/get_children", therapist_detail).then((response) => {
                if (response.status == 200) {
                    set_all_children(response.data);
                    console.log(all_children)
                }
            });

        axios
            .post("http://localhost:4000/activity/get_activity", therapist_detail)
            .then((response) => {
                if (response.status == 200) {
                    set_all_activity(response.data);
                    console.log(all_activity);
                }
            });
    }, []);


    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
  };

    return (
        <div style = {{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',

        }}>
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Sidebar/>
            </Box><br></br>
            <div className="App" align="center">
                <Button
                    type="submit"
                    width="50%"
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    onClick={handleClickOpen}
                    style = {{
                        backgroundColor: '#3f51b5',
                    }}
                >
                    Grade Student
                </Button>
                <Dialog open={open} onClose={handleClose} style = {{
              }}>
                <br></br>
                {/* {is_add == true ?
                    ( */}

                            <Typography variant="h5" style = {{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>Grade Portal</Typography>
                            <form style = {{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <br /><br />
                                <FormControl >
                                    <InputLabel id="demo-simple-select-label">Child Name</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={current_child_name}
                                        label="Child Name"
                                        onChange={onChange_child}
                                        style = {{
                                            width: '200px',
                                        }
                                        }
                                    >
                                        {all_children.map(child => (
                                            <MenuItem value={child["Child_name"]}>{child["Child_name"]}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <br /><br />
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Activity</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={current_activity_name}
                                        label="Activity"
                                        onChange={onChange_activity}
                                        style = {{
                                            width: '200px',
                                        }
                                        }
                                    >
                                        {all_activity.map(activity => (
                                            <MenuItem value={activity["Name"]}>{activity["Name"]}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <br /><br />
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={grade}
                                        label="Grade"
                                        onChange={onChange_grade}
                                        style = {{
                                            width: '200px',
                                        }
                                        }
                                    >

                                        <MenuItem value="A">A</MenuItem>
                                        <MenuItem value="B">B</MenuItem>
                                        <MenuItem value="C">C</MenuItem>
                                        <MenuItem value="D">D</MenuItem>
                                    </Select>
                                </FormControl><br></br><br />
                            
                                <TextField
                                    style={{ width: "400px", margin: "20px" }}
                                    type="text"
                                    label="Comments"
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    name="Comments"
                                    autoComplete="Add some Comment"
                                    autoFocus
                                    value={Comment_text}
                                    onChange={onChangecomment}
                                />
                                <br /><br></br>
                                <Button variant="contained" color="primary" onClick={addGrade} style = {{
                                    marginBottom: '20px',
                                }}>
                                    Submit
                                </Button>
                            </form>

                        </Dialog>
            </div>
            {all_grades === "" ? (<> No grades done </>) : (<>
                {all_grades.map(item => (
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
                                                Child : {item["Child_name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Activity : {item["Activity_name"]}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Grade : {item["grade_letter"]}
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
        </div>
        );
}
