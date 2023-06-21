
import React,{useContext} from "react";
import LoginContext from "../context/loginContext";

const A = () => {
      let{token, setToken} = useContext(LoginContext);


    return(
        <div>
             <h1> A Component</h1>
             <h1> Hello, {token} </h1>
            
        </div>

    )
}

export default A;