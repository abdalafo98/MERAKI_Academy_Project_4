import React,{ useState,  } from "react";
import axios from "axios";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';



export default function Payment() {
  let thisToken = localStorage.getItem("token");
const  newArr  = JSON.parse(localStorage.getItem("newArr"))
const totalPrice =parseInt( localStorage.getItem("totalPrice"))
const [number, setNumber] = useState("");
const [name, setName] = useState("");
const [expiry, setExpiry] = useState("");
const [cvc, setCvc] = useState("");
const [focused, setFocused] = useState("");

console.log("newArr",newArr);
console.log(typeof(totalPrice));
const payNow = ()=>{
    const date = Date().split(" GMT+0300 (Eastern European Summer Time)")[0].replaceAll(" ","-")
    axios.post("http://localhost:5000/order",{
      date , products:newArr , totalPrice : totalPrice 
    },{
       headers: {
      authorization: "Bearer " + thisToken,
     },
     }).then((result)=>{
       console.log(result);
     }).catch((err)=>{
       console.log(err);
     })
}
    /*
    
    */
    return (
        <>
        <div>
        <div>
           <input placeholder="security Code"  />
           <h4>inter your card details to continue with your payment</h4>
           
         
           <input type="checkbox"PayPal />
        </div>
        <div>
            <input name="number" placeholder ='number' onChange={(e)=>{setNumber(e.target.value) }} onFocus={(e)=>{setFocused(e.target.name) }} />
            <input name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)} }  onFocus={(e)=>{setFocused(e.target.name) }}    />
            <input name ="expiry" placeholder="MM/YY expiry"  onChange={(e)=>{setExpiry(e.target.value)} } onFocus={(e)=>{setFocused(e.target.name) }} />
            <input name="cvc" placeholder="Cvc" onChange={(e)=>{setCvc(e.target.value)} }  onFocus={(e)=>{setFocused(e.target.name) }}  />
        </div>
        <div>
            <button onClick = {payNow}>Confirm Payment</button>
        </div>
        <div>
        <Cards
      number={number}
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focused}/>
      </div>
        </div>
        </>
    )
}
