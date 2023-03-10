const PatientSchema = require("../Model/PatientInformation");

// create function to fetch all info from DB

const getAllPatients= async(req,res,next) =>{
let patients;
try{
    patients = await PatientSchema.find()
}catch(err){
    console.log(err)
    }
    if(!patients){
        return res.status(404).json({message: "No Patients Found"})
    }
    return res.status(200).json({patients});
};

const getById = async (req, res, next) =>{
    const id = req.params.id;
    let patient;
    try{
        patient = await PatientSchema.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(404).json({message: "No Patient Found"})
    }
    return res.status(200).json({patient})
};


const addPatient = async (req, res, next)=>{
    const {name, dob, patient_id, insurance, health_history} = req.body;
    let patient;
    try{
        patient = new PatientSchema({
            name, 
            dob,  
            patient_id, 
            insurance,
            health_history
        });
        await patient.save();
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(500).json({message : "Unable to Add Patient"})
    }
    return res.status(201).json({patient})
};

//create function to update a value based on id
const updatePatient = async (req, res, next) => {
    const id = req.params.id;
    const {name, dob,patient_id, insurance, health_history } = req.body;
    let patient;
    try{
        patient = await PatientSchema.findByIdAndUpdate(id, {
            name, 
            dob, 
            patient_id, 
            insurance,
            health_history
        });
        patient = await patient.save();
    }catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(404).json({message: "Unable to update by this ID value"})
    }
    return res.status(200).json({patient});
};

const deletePatient = async (req,res, next) => {
    const id = req.params.id;
    let patient;
    try{
        patient = await PatientSchema.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(404).json({ message: "Unable to Delete By This ID"});
    }
    return res.status(200).json({message: "Patient Successfully Deleted"})
};

// export functions to be used for URLS for functionally
exports.getAllPatients = getAllPatients;
exports.getById = getById;
exports.addPatient = addPatient;
exports.updatePatient = updatePatient;
exports.deletePatient  = deletePatient;

