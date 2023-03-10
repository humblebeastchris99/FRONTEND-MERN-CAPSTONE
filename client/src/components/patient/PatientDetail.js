import {
    Box,
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";

  const PatientDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:3001/patient/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.patient));
      };
      fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
          .put(`http://localhost:3001/patient/${id}`, {
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
        sendRequest().then(() => history("/patient"));
      };
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
  return (
        <div>
          {inputs && (
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
                <FormLabel>Insurance:</FormLabel>
                <TextField
                  value={inputs.insurance}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="insurance"
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
                

                  <FormLabel>Health History:</FormLabel>
                  <TextField
                    value={inputs.health_history}
                    onChange={handleChange}
                    type="normal"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="health_history"
                  />

    
                
                <Button variant="contained" type="submit">
                  Update Patient Information
                </Button>
              </Box>
            </form>
          )}
        </div>
  )}
  


  export default PatientDetail 