import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';


const Register = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("");
  const [parent_name, setParent_name] = useState("")
  const [child_name, setChild_name] = useState("")
  const [experience, setExp] = useState("")
  const [qualification, setQual] = useState("")
  const [city, setCity] = useState("")

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };
  
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeChoice = (event) => {
    setChoice(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeContact = (event) => {
    setContact(event.target.value);
  };
  const onChangeparentname = (event) => {
    setParent_name(event.target.value)
  };
  const onChangechildname = (event) => {
    setChild_name(event.target.value)
  };
  const onChangeExperience = (event) => {
    setExp(event.target.value)
  };
  const onChangeQualification = (event) => {
    setQual(event.target.value)
  };
  const onChangecity = (event) => {
    setCity(event.target.value)
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setContact("");
    setAge("");
    setPassword("");
    setChoice("");
    setCity("");
    setQual("");
    setExp("");
    setParent_name("");
    setChild_name("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(choice === "Parent")
    {
      const newParent = 
      { Parent_name : parent_name,
        Child_name : child_name,
        Child_age : age,
        Email : email,
        Password : password,
        Contact : contact };

    axios
      .post("http://localhost:4000/register/register-parents", newParent)
      .then((response) => {
        alert(String(response.data));
      });
    }
    else
    {
      
      const newTherapist  = { Name : name,
        Age:age,
        Experience:experience,
        Qualification:qualification,
        Email:email,
        Password:password,
        Contact :contact};
      
        axios
      .post("http://localhost:4000/register/register-therapist", newTherapist)
      .then((response) => {
        alert(response.data);
      });
    }
    resetInputs();
  };

  return (
    <Grid container align={"center"} spacing={2}>
      
      <Grid item xs={12}>
        <Button variant="contained" value="Therapist" onClick={onChangeChoice}>Therapist</Button>
        <Button variant="contained" value="Parent" onClick={onChangeChoice}>Parent</Button>
      </Grid>
      {choice === "Therapist" ? (
        <>
        <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
            />
          </Grid>
          <Grid item xs={12}>
        <TextField
          label="Experience"
          variant="outlined"
          value={experience}
          onChange={onChangeExperience}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="qualification"
          variant="outlined"
          value={qualification}
          onChange={onChangeQualification}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contact"
          variant="outlined"
          value={contact}
          onChange={onChangeContact}
        />
      </Grid>
         </>) : (<>


          <Grid item xs={12}>
        <TextField
          label="Parent Name"
          variant="outlined"
          value={parent_name}
          onChange={onChangeparentname}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Child Name"
          variant="outlined"
          value={child_name}
          onChange={onChangechildname}
        />
      </Grid>
      <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
            />
          </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contact"
          variant="outlined"
          value={contact}
          onChange={onChangeContact}
        />
      </Grid>
          </>)
      }

      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>


      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2" onClick={() => navigate("/signin")}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
