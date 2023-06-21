import React, {useState, useContext} from "react";
import axios from "axios";
import LoginContext from "../context/loginContext";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const naigate = useNavigate();

    let {token, setToken} = useContext(LoginContext);
    

    

     



     function handleLogout(e){
        e.preventDefault();

       

     }



    return(
        <div>
               <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login;