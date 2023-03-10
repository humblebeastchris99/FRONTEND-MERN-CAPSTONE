import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import Patients from "./components/patient/Patients";
import About from "./components/About";
import PatientDetail from "./components/patient/PatientDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddPatient />} exact />
          <Route path="/patient" element={<Patients/>} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/patient/:id" element={<PatientDetail  />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
