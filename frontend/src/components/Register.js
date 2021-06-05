import {React,useState } from "react";
import axios from "axios"


export default function Register() {
const [firstName, setFirstName] = useState("")  
  const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("60b78ed5f2ecb32d50219488")
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false)
    console.log({firstName,lastName,age,gender,country,phoneNumber,email,password,role});
    const rigister  = ()=>{
        axios.post("http://localhost:5000/user/createUser",{firstName,lastName,age,gender,country,phoneNumber,email,password,role})
        .then((result)=>{
            if(!result.data.errors){
                console.log("success ",result.data);
                setSuccess(true)

            }else{
                setError(true)
                console.log(result.data.errors);

            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="containerDiv">
            <div className="registerDiv">
                <input className="registerInput" type="text" placeholder="First Name" onChange={(e)=>{
                    setFirstName(e.target.value)}}/>
                <input className="registerInput" type="text" placeholder="Last Name"onChange={(e)=>{
                    setLastName(e.target.value)}} />
                <input className="registerInput" type="Number" placeholder="Age" onChange={(e)=>{
                    setAge(e.target.value)}}/>
                <input className="registerInput" type="text" placeholder="Gender" onChange={(e)=>{
                    setGender(e.target.value)}}/>
                <input className="registerInput" type="text" placeholder="Country" onChange={(e)=>{
                    setCountry(e.target.value)}}/>
                <input className="registerInput" type="text" placeholder="Phone" onChange={(e)=>{
                    setPhoneNumber(e.target.value)}}/>
                <input className="registerInput" type="email" placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value)}}/>
                <input className="registerInput" type="Password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value)}}/>
                <button className="registerBtn" onClick={rigister}>Register</button>
                {success ? (
        <div className="success">The user has been created successfully</div>
      ) : null}
      {error ? (
        <div className="error">
          Error happened while register, please try again
        </div>
      ) : null}
            </div>
            
        </div>
    )
}
