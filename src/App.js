import React ,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Slides from './Slides/Slides';
import About_Us from './About_Us/About_Us';
import Adas_Archi from './Adas_Archi/Adas_Archi';
import Home from './Home/Home';
import Adas_Features from './Adas_Features/Adas_Features';
import Cameras_Sensors from './Camers&Sensors/Cameras&Sensors';


function App() {
  return(
    <BrowserRouter>
    <Navbar />
     <Route exact={true} path="/">
      <Slides />
      <Home />
     </Route>
     <Route exact={true} path="/Cameras_Sensors">
      <Cameras_Sensors />
     </Route>
     <Route exact={true} path="/Adas_Features">
      <Adas_Features />
     </Route>
     <Route exact={true} path="/Adas_Archi">
      <Adas_Archi />
     </Route>
     <Route exact={true} path="/About_Us">
      <About_Us />
     </Route>
    
    
    
    </BrowserRouter>
 
    

  );
}

export default App;
