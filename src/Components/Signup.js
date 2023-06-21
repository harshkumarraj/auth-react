import React,{useState} from 'react';
import axios from 'axios';

const Signup = () => {
    let [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    let [error, setError] = useState("")

    let {name, email, password, confirmPassword} = formData;
    console.log(formData)
    function onFormSubmit(e){
          e.preventDefault();
         if(!name || !email || !password || !confirmPassword){
             return setError("Please fill all the fields")
         }
        if(password !== confirmPassword){
            return setError("Password and Confirm Password must be same")
        }
        
        axios.post("http://localhost:5000/api/auth/signup", formData)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err))
    }

    return(
        <div className="signup">
             
             {
                    error && <p>{error}</p>
             }


            <form className="signup-form" onSubmit={onFormSubmit}>
              
                    <input type="text" placeholder="Enter your name" 
                     onChange={(e) => setFormData({...formData, name:e.target.value})}
                    />
                    <input type="text" placeholder="Enter your email" 
                        onChange={(e) => setFormData({...formData, email:e.target.value})}
                    />
                    <input type="text" placeholder="Enter your password" 
                        onChange={(e) => setFormData({...formData, password:e.target.value})}
                    />
                    <input type="text" placeholder="Enter your confirm password" 
                        onChange={(e) => setFormData({...formData, confirmPassword:e.target.value})}
                    />
                   <button>Submit</button>
            
            </form>
    </div>
    )
}

export default Signup;
