import React ,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Slides from './Slides/Slides';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
     <Route exact={true} path="/">
      <Slides />
     </Route>
    
    
    
    </BrowserRouter>
 
    

  );
}

export default App;
