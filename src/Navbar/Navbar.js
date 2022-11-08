import React from "react";
import "../App.css"
import "./Navbar.css"

const Navbar = () =>{
  return(<div>
    <nav class="navbar " id="navtop">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="/Img/logo1.png" alt="Bootstrap" width="120" height="40"></img></a>
  </div>
  <div id="loginbtn" class="justify-content-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
        </div>
</nav>
<nav  id="nav" class="navbar navbar-expand-md ">
  <div id="navcon" class="container">
    <a class="navbar-brand" href="/">
      
    </a>
    <ul class="nav justify-content-end">
    <li class="nav-item">
    <a class="nav-link active text-dark" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active text-dark" aria-current="page" href="/Adas_Archi">Adas Architecture</a>
  </li>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" data-toggle="dropdown" onClick="dropdown" role="button">
            ADAS Features
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/highway_driving_assist">Highway Driving Assist</a></li>
            <li><a class="dropdown-item" href="/automatic_emergency_steering">Automotive Emergency Steer</a></li>
            <li><a class="dropdown-item" href="/lane_centering_assist">Lane Centering Assist</a></li>
            <li><a class="dropdown-item" href="/Uraban_chauffer">Urban Chauffeur</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/Adas_Features">More..</a></li>
          </ul>
        </li>
        <li class="nav-item ">
        <a class="nav-link active text-dark" aria-current="page" href="/Cameras_Sensors">Cameras&Sensors</a>
        </li>
        
  <li class="nav-item">
    <a class="nav-link text-dark" href="/About_Us">About Us</a>
  </li>
</ul>
  </div>
</nav>
</div>
  );
}


export default Navbar;