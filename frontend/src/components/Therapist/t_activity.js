import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Checkbox } from "@mui/material";
import Sidebar from "../templates/Therapist_Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import backgroundImage from "../images/therapist.jpg";
import Dialog from "@material-ui/core/Dialog";

export default function Activities_page() {
  if (
    localStorage.getItem("id") === null ||
    localStorage.getItem("choice") != "Therapist"
  ) {
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
            } else if (response.status == 200) {
                alert("Activity Added");
            } else {
                alert("Error adding activity");
                console.log(new_activity);
            }
            window.location.reload();
        });
        setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Activity", headerName: "Activity", width: 130 },
    { field: "Intensity", headerName: "Intensity", width: 130 },
    {
      field: "Description",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];
  let rows = [];
  useEffect(() => {
    const therapist_detail = {
      Therapist_id: String(localStorage.getItem("id")),
    };

    axios
      .post("http://localhost:4000/activity/get_activity", therapist_detail)
      .then((response) => {
        if (response.status == 200) {
          set_all_activity(response.data);
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
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <>
        <Sidebar />
        {/* </Box><br></br><br></br> */}
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
            Add Activity
          </Button>
          {/* {is_add == true ? ( */}
            {/* <> */}
              <Dialog open={open} onClose={handleClose} style = {{
              }}>
                <br></br>

                <Typography variant="h5" style = {{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "black",
                    textAlign: "center",
                }}>NEW ACTIVITY</Typography>
                <form style = {{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    leftpadding: "10px",
                    rightpadding: "20px",
                }}>
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
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Intensity
                    </InputLabel>
                    <Select
                    style = {{
                        width:  "200px"
                    }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                        fullWidth
                      value={Intensity}
                      label="Intensity"
                      onChange={onChangeintensity}
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Moderate">Moderate</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                  <br />
                  <br />
                  <TextField
                
                    style={{ width: "300px", margin: "20px" }}
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={addActivity}
                    style = {{
                        marginBottom: "40px"
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Dialog>
            
        </div>
        {all_activity === "" ? (
          <></>
        ) : (
          <>
            {all_activity.map((item) => (
              <>
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
                  style={{
                    opacity: 0.8,
                    backgroundColor: "#e5d7f5",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6} container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
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
                <br></br>
              </>
            ))}
          </>
        )}
      </>
    </div>
  );
}
