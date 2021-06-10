import React from 'react'
import axios from "axios";
let thisToken = localStorage.getItem("token");


export default function Payment() {
const  newArr  = JSON.parse(localStorage.getItem("newArr"))
const totalPrice =parseInt( localStorage.getItem("totalPrice"))

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
            <input placeholder ='Card Number' />
            <input placeholder="Name on Card" />
            <input placeholder="Expiration Date" />
            <input placeholder="security Code" />
        </div>
        <div>
            <button onClick = {payNow}>Confirm Payment</button>
        </div>
        </div>
        </>
    )
}
