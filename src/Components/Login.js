import React, {useState, useContext} from "react";
import axios from "axios";
import LoginContext from "../context/loginContext";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const naigate = useNavigate();

    let {token, setToken} = useContext(LoginContext);
    

     let [email, setEmail] = useState("");
     let [password, setPassword] = useState("");
     let [loggedInUser, setLoggedInUser] = useState({});

     console.log(loggedInUser);



     function handleLogin(e){
        e.preventDefault();

        axios.post("http://localhost:5000/api/auth/login", {email, password})
        .then((res) => {
            setLoggedInUser(res.data.data)
            setToken(res.data.data.token)
        })
        .catch((err) => console.log(err))

        naigate("/secret")

     }



    return(
        <div>
               <form onSubmit={handleLogin}>
                     <input type="email" placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input type="password" placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button type="submit" >Login</button>
               </form>
        </div>
    )
}

export default Login;