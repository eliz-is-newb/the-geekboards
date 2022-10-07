import React, {useState} from "react";
import '../boards/PostCSS.css';
import MapHistory from "./MapHistory";

const Dashboard = ({setLoggedInDashboard}) => {
return (


<>
        <p className="username-label-dashboard">NotbillClinton123 </p>

        
        <MapHistory/>
       <button onClick={setLoggedInDashboard(prev =>!prev)} className="button is-dark logout-dashboard">Log out</button>

</>




)}
export default Dashboard