import React from 'react';
import Signup from './Components/Signup';
// import Provider from './context/Provider';
import A from './Components/A';
import Login from './Components/Login';
import Secret from './Components/Secret';
import {Routes, Route} from "react-router-dom";


const App = () =>{
  
  return(
    <div>
          <Routes>
              <Route path="/" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/secret" element={<Secret/>} />
          </Routes>
         
    </div>
  )
}

export default App;


// use State, useEffect , context,  Routers