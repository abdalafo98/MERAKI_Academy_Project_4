import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";


export default function Favorites({token}) {
    const [result, setResult] = useState([]);
    let thisToken  = localStorage.getItem("token")
    useEffect(() => {
        axios.get("http://localhost:5000/favorites",{
            headers:{
                Authorization: "Bearer "+ thisToken
            }
        }).then((response)=>{
            console.log(response)
            setResult(response.data)
        }).catch((err)=>{
            console.log(err)
        })
        console.log(result)
      }, []);
     
    return (
        <div>
            
        </div>
    )
}
