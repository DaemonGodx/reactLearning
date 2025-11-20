import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../useContext/userContext";
 function Login() {
    const [username, setUsername] = useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(UserContext);

    const clickHandler=(e)=>{
        e.preventDefault();
        setUser({username,password});


    }
    
    return (
        <>
        <h1>Enter Your Details</h1>
        <input type="text" style={{width:"300px", height:"30px"}}
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         placeholder="Username" />
        <br />
        <input type="password" style={{width:"300px", height:"30px" ,marginTop:"10px"
        }}
         value={password}
        onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <br />
        <button style={{marginTop:"20px"}}
        onClick={clickHandler}>Login</button>  
        </>
    )
    }

    export default Login;