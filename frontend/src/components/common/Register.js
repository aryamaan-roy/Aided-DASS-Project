import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Sidebar from "../templates/Sidebar";
import backgroundImage from "../images/reg.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const theme = createTheme();

const Userform = (props) => {
  const [parentname, setParentName] = useState("");
  const [childname, setChildName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [experience, setExp] = useState("");
  const [qualification, setQual] = useState("");

  const resetInputs = () => {
    setParentName("");
    setChildName("");
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setContact("");
    setConfirmPassword("");
    setExp("");
    setQual("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    if (props.user === "Parent") {
      const newParent = {
        Parent_name: parentname,
        Child_name: childname,
        Child_age: age,
        Email: email,
        Password: password,
        Contact: contact,
      };

      console.log(newParent);
      axios
        .post("/api/register/register-parents", newParent)
        .then((response) => {
          alert(String(response.data));
        });
    } else {
      const newTherapist = {
        Name: name,
        Age: age,
        Experience: experience,
        Qualification: qualification,
        Email: email,
        Password: password,
        Contact: contact,
      };

      console.log(newTherapist);
      axios
        .post("/api/register/register-therapist", newTherapist)
        .then((response) => {
          alert(response.data);
        });
    }
    // resetInputs();
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "parentname") {
      setParentName(e.target.value);
    } else if (e.target.name === "childname") {
      setChildName(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.value);
    } else if (e.target.name === "contact") {
      setContact(e.target.value);
    } else if (e.target.name === "experience") {
      setExp(e.target.value);
    } else if (e.target.name === "qualification") {
      setQual(e.target.value);
    }
  };

  if (props.user === "Parent") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {/* // form to take name, child name, email, password, confirm password, and date of birth of child  */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="parentname"
              label="Parents Name"
              id="parentname"
              autoComplete="ParentName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="childname"
              label="Childs Name"
              id="childname"
              autoComplete="ChildName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
              autoComplete="age"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="contact"
              label="Contact"
              type="number"
              id="contact"
              autoComplete="contact"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#dea149",
                }}
                onClick={onSubmit}
              >
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
  if (props.user === "Therapist") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {/* // form to take name, child name, email, password, confirm password, and date of birth of child  */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="Name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="qualification"
              label="Qualification"
              id="qualification"
              autoComplete="Qualification"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="experience"
              label="Experience"
              type="number"
              id="experience"
              autoComplete="experience"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="contact"
              label="Contact"
              type="number"
              id="contact"
              autoComplete="contact"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#dea149",
                }}
                onClick={onSubmit}
              >
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <div></div>;
};

// const Register = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [user, setUser] = useState("");
//   const [date, setDate] = useState(null);

//   const onChangeUsername = (event) => {
//     setName(event.target.value);
//   };

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const resetInputs = () => {
//     setName("");
//     setEmail("");
//     setDate(null);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const newUser = {
//       name: name,
//       email: email,
//       date: Date.now(),
//     };

//     axios
//       .post("/api/user/register", newUser)
//       .then((response) => {
//         alert("Created\t" + response.data.name);
//         console.log(response.data);
//       });

//     resetInputs();
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "flex-start",
//         // insert full background image
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//       }}
//     >
//       <Sidebar />
//       <div
//         style={{
//           // place the div in center
//           marginTop: "150px",
//           float: "center",
//           height: "400px",
//           width: "300px",
//           // filter: "blur(5px)",
//           filter: "drop-shadow(0px 10px -14px 14px #FFF)",
//           boxShadow: "0px 10px -14px 14px #FFF",
//           borderRadius: "10px",
//           padding: "20px",
//           paddingTop: "30px",
//           paddingBottom: "30px",
//           paddingLeft: "20px",
//           paddingRight: "20px",
//           background: "#ffffff75",
//         }}
//       >
//         <Grid container spacing={3}>
//           <Grid item xs={6}>
//             <Button onClick={() => setUser("Parent")}>Parent</Button>
//           </Grid>
//           <Grid item xs={6}>
//             <Button onClick={() => setUser("Therapist")}>Therapist</Button>
//           </Grid>
//           <Userform user={user} />
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Register;

export default function Register() {
  const [user, setUser] = useState("");

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
                // place the div in center
                marginTop: "75px",
                float: "center",
                height: "500px",
                width: "350px",
                // filter: "blur(5px)",
                filter: "drop-shadow(0px 10px -14px 14px #FFF)",
                boxShadow: "0px 10px -14px 14px #FFF",
                borderRadius: "10px",
                padding: "20px",
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
                paddingRight: "20px",
                background: "#faf0e1",
                borderRadius: "40px",
              }}
            >
              <div
                style={{
                  float: "center",
                  height: "400px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // background: "#ffff1275",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => setUser("Parent")}
                      style={{
                        color: "#dea149",
                        fontWeight: "bold",
                      }}
                    >
                      Parent
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => setUser("Therapist")}
                      style={{
                        color: "#dea149",
                        fontWeight: "bold",
                      }}
                    >
                      Therapist
                    </Button>
                  </Grid>
                  <Userform user={user} />
                </Grid>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
