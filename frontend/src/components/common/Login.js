import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "../images/background.jpg";
import Sidebar from "../templates/Sidebar";
import axios from "axios";



const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const resetInputs = () => {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    };


    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(newUser);

    axios
        .post("/api/login", newUser)
        .then((response) => {
          if (response.status == 404) {
            alert(response.data);
            alert("Invalid credentials")
          }
          else if(response.status == 200){
            localStorage.setItem('id', response.data);
            localStorage.setItem('choice', "Parent");
            window.location.href = "/p_home"
          }
          else
          {
            localStorage.setItem('id', response.data);
            localStorage.setItem('choice', "Therapist");
            window.location.href = "/t_home"
          }
        });
    
    
    resetInputs();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={8} sm={8} md={4} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <div
              style={{
                marginTop: "80px",
                marginRight: "40px",
                paddingTop: "100px",
                paddingBottom: "120px",
                paddingRight: "60px",
                paddingLeft: "60px",
                backgroundColor: "#698AF850",
                borderRadius: "50px",
              }}
            >
              <Typography component="h1" variant="h5" color="#bd84f0">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  style={{
                    backgroundColor: "#698AF8",
                    color: "#fff",
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
