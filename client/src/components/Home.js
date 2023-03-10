import React from "react";
import hospital_building from "../images/hospital_building.jpg" 
import "./Home.css"
const Home = () => {
  return (
    <div>
      
      <h1>Cape Health hospital</h1>  

      <img src = {hospital_building}  alt = "hospital building"></img>
      
    </div>
  );
};
export default Home;
