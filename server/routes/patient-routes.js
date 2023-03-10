const express = require("express");
const router = express.Router();
const patientControllers = require("../controllers/Patient-controllers");

//assign functionally to Urls

//localhost:3001/patient/:id
router.get("/", patientControllers.getAllPatients);

//localhost:3001/patient/:id
router.post("/", patientControllers.addPatient);

//localhost/3001/patient/:id
router.get("/:id", patientControllers.getById);

//localhost:3001/patient/:id
router.put("/:id", patientControllers.updatePatient);

//localhost:3001/patient/:id
router.delete("/:id", patientControllers.deletePatient);

module.exports = router;
