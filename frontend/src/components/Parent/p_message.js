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
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../templates/Parent_Sidebar";
import backgroundImage from "../images/therapist.jpg";
import Dialog from "@material-ui/core/Dialog";
export default function Parent_message_page() {
  if (
    localStorage.getItem("id") === null ||
    localStorage.getItem("choice") != "Parent"
  ) {
    window.location.href = "/signin";
  }

  const [Message_text, set_Message] = useState("");
  const [current_therapist_name, set_therapist_name] = useState("");
  const [all_messages, set_all_messages] = useState([]);
  const [is_add, set_isadd] = useState(false);
  const [all_links, set_all_links] = useState([]);
  const change_isadd = (event) => {
    set_isadd(true);
  };

  const onChangetherapist = (e) => {
    set_therapist_name(e.target.value);
  };

  const onChangemessage = (e) => {
    set_Message(e.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const new_message = {
      Parent_id: String(localStorage.getItem("id")),
      Therapist_name: current_therapist_name,
      Message_text: Message_text,
    };

    axios
      .post("/api/message/add_message", new_message)
      .then((response) => {
        if (response.status == 404) {
          alert("Error");
        } else if (response.status == 200) {
          alert("Message sent");
        } else {
          alert("Error sending message");
          console.log(new_message);
        }
        window.location.reload();
      });
  };

  useEffect(() => {
    const Parent_detail = {
      Parent_id: String(localStorage.getItem("id")),
    };

    axios
      .post("/api/message/get_parent_messages", Parent_detail)
      .then((response) => {
        if (response.status == 200) {
          set_all_messages(response.data);
          console.log(all_messages);
        }
      });

    axios
      .post("/api/link/get_therapists", Parent_detail)
      .then((response) => {
        if (response.status == 200) {
          set_all_links(response.data);
          console.log(all_links);
        }
      });
      setOpen(false);
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {};

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Sidebar />
        </Box>
        <br></br>
        <div className="App" align="center">
          <Button
            type="submit"
            width="50%"
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
            onClick={handleClickOpen}
            style={{
              backgroundColor: "#3f51b5",
            }}
          >
            Compose Message
          </Button>
          <Dialog open={open} onClose={handleClose} style={{}}>
            <br></br>

            <Typography variant="h5" style = {{
                display: "flex",
                
            }}>Compose Message</Typography>
            <form>
              <br />
              <br />

              <br />
              <br />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Therapist</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={current_therapist_name}
                  label="Therapist"
                  onChange={onChangetherapist}
                >
                  {all_links.map((item) => (
                    <MenuItem value={item["Therapist_name"]}>
                      {item["Therapist_name"]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br></br>
              <br />
              <TextField
                style={{ width: "400px", margin: "5px" }}
                type="text"
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                name="Message"
                autoComplete="Type the message"
                autoFocus
                value={Message_text}
                onChange={onChangemessage}
              />
              <br />
              <br></br>
              <Button variant="contained" color="primary" onClick={addMessage}>
                Send Message
              </Button>
            </form>
          </Dialog>
        </div>
        {all_messages === "" ? (
          <> No messages </>
        ) : (
          <>
            <h2
              align="center"
              style={{
                color: "#986cab",
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              Your messages
            </h2>
            {all_messages.map((item) => (
              <>
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
                  style={{
                    opacity: 0.8,
                    backgroundColor: "#e5d7f5",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
                            To : {item["Therapist_name"]}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Message : {item["Message_text"]}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Reply : {item["Reply_text"]}
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
