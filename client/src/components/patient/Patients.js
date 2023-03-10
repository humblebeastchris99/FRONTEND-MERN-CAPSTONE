import React, { useEffect, useState } from "react";
import "./Patient";
import axios from "axios";
import Patient from "./Patient";
const URL = "http://localhost:3001/patient";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Patients = () => {
  const [patients, setPatients] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPatients(data.patients));
  }, []);
  console.log(patients);
  return (
    <div>
      <ul>
        {patients &&
          patients.map((patient, i) => (
            <li key={i}>
              <Patient patient={patient} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Patients;
