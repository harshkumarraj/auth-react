import React,{useState} from "react";
import LoginContext from "./loginContext";

const Provider = (props) => {
   let [token, setToken] = useState("");
   


    return(
          <LoginContext.Provider value={{
            token: token,
            setToken: setToken
          }}>

            {props.children}

          </LoginContext.Provider>
    )
}

export default Provider;