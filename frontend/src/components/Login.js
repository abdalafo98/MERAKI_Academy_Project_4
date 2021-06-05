import { React, useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("")  
const [loginError, setLoginError] = useState(false);

  const chick = () => {
      console.log({email,password})
    axios.post("http://localhost:5000/login",{email,password}).then((result)=>{

        if(!result.data.errors){
            console.log("success ",result.data);
        }else{
            setLoginError(result.data.errors)
        }
    }).catch(err=>{
        console.log({email,password})
        console.log(err)
    })
  };
  return (
    <div className="containerDiv">
      <div className="loginDiv"></div>
      <input
        className="registerInput"
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="registerInput"
        type="Password"
        placeholder="Password"
        onChange={(e) => {
            setPassword(e.target.value);
        }}
      />
      <button className="registerBtn" onClick={chick}>
        Register
      </button>
      <div>{loginError ? <p className="errCreated">{loginError}</p> : ""}</div>
    </div>
  );
}
