
import React,{useEffect, useState, useContext} from "react";
import axios from "axios";
import LoginContext from "../context/loginContext";


const Secret = () => {

    let [secret, setSecret] = useState("")

    let {token,setToken} = useContext(LoginContext);

    console.log(token);

   useEffect(()=>{
       axios.get("http://localhost:5000/api/auth/secret1", {
              headers:{
                authorization: `Bearer ${token}`
              }
       })
         .then((response) => setSecret(response.data))
            .catch((err) => console.log(err))
   },[token])

   function handleLogout(){
        axios.delete("http://localhost:5000/api/auth/logout", {
               headers:{
                authorization: `Bearer ${token}`
               }
        })
            .then((response) => {
                console.log(response.data);
                setToken("")
                setSecret("")
            })
            .catch((err) => console.log(err))
   }
         

    return(
        <div>
            <h1> Secret Component</h1>
            {secret.loggedInAgentDetails &&(
            <div>
            <h3>Welcome {secret.loggedInAgentDetails.name}</h3>
            <p>{secret.message}</p>
            </div>
            )
            }
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Secret;