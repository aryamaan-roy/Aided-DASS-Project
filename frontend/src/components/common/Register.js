import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Sidebar from "../templates/Sidebar";
import backgroundImage from "../images/reg.jpeg";
import ButtonGrad from "../images/button_gradient.jpeg";

const Userform = (props) => {
  const [parentname, setParentName] = useState("");
  const [childname, setChildName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [experience, setExp] = useState("")
  const [qualification, setQual] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }  else if (e.target.name === "parentname"){
      setParentName(e.target.value);
    }else if (e.target.name === "childname"){
      setChildName(e.target.value);
    }else if (e.target.name === "age"){
      setAge(e.target.value);
    }else if (e.target.name === "contact"){
      setContact(e.target.value);
    }else if (e.target.value === "experience"){
      setExp(e.target.value);
    }else if (e.target.value === "qualification"){
      setQual(e.target.value);
    }


  };

  if (props.user === "Parent") {
    return (
      <div style = {{
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
              name=" Parents Name"
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
              name=" Childs Name"
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
              name="Contact"
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
            <form onSubmit={onSubmit}>
              <Button variant="contained" color="primary">
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
      <div style = {{
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
              name="Name"
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
              name="Qualification"
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
              name="Experience"
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
              name="Contact"
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
            <form onSubmit={onSubmit}>
              <Button variant="contained" color="primary">
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

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState(null);

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      date: Date.now(),
    };

    axios
      .post("http://localhost:4000/user/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        // insert full background image
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Sidebar />
      <div
        style={{
          // place the div in center
          marginTop: "150px",
          float: "center",
          height: "400px",
          width: "300px",
          // filter: "blur(5px)",
          filter: "drop-shadow(0px 10px -14px 14px #FFF)",
          boxShadow: "0px 10px -14px 14px #FFF",
          borderRadius: "10px",
          padding: "20px",
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
          background: "#ffffff75",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button onClick={() => setUser("Parent")}>Parent</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={() => setUser("Therapist")}>Therapist</Button>
          </Grid>
          <Userform user={user} />
        </Grid>
      </div>
    </div>
  );
};

export default Register;

// import { display } from "@mui/system";
// import { useState } from "react";

// const Register = (props) => {

//   const [age, setAge] = useState(0);
//   const [salary, setSalary] = useState(0);

//   const onChangeAge = (event) => {
//     setAge(event.target.value);
//   }

//   const onChangeSalary = (event) => {
//     setSalary(event.target.value);
//   }

//   const resetInputs = () => {
//     setAge("");
//     setSalary("");
//   }

//   const onSubmit = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <div style = {{
//         width: "25%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       >
//         <form onSubmit={onSubmit} style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//         >
//           <input
//             type="text"
//             placeholder="Age"
//             value={age}
//             onChange={onChangeAge}
//             style={{
//               marginBottom: "10px",
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Salary"
//             value={salary}
//             onChange={onChangeSalary}
//             style={{
//               marginBottom: "10px",
//             }}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
