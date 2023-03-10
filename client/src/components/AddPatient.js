import {
    Button, 
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
const AddPatient = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      dob: "",
      patient_id: "",
      insurance: "",
      health_history: ""
    });
    const [checked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
const sendRequest = async () => {
      await axios
        .post("http://localhost:3001/patient", {
            name: String(inputs.name),
            dob: String(inputs.dob),
            patient_id: Number(inputs.patient_id),
            insurance: String(inputs.insurance),
            health_history: String(inputs.health_history)
        })
        .then((res) => res.data);
    };
const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/patient"));
    };
return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}


          >
          <FormLabel>Name:</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
<FormLabel>Date of Birth:</FormLabel>
          <TextField
            value={inputs.dob}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="dob"
          />
           <FormLabel>Patient ID:</FormLabel>
          <TextField
            value={inputs.patient_id}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="patient_id"
          />
<FormLabel>Insurance</FormLabel>
          <TextField
            value={inputs.insurance}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="insurance"
          />

<FormLabel>Health History</FormLabel>
          <TextField
            value={inputs.health_history}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="health_history"
          />

          <Button variant="contained" type="submit">
            Add Patient
          </Button>
        </Box>
      </form>












    );
  };
  export default AddPatient;

  