import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
// import Provider from './context/Provider';
import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import Provider from "./context/Provider";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<Provider>
     <BrowserRouter>
        <App/>
    </BrowserRouter>    
</Provider>
, 
document.getElementById("root"))
