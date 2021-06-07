import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";


export default function Favorites({token}) {
    const [result, setResult] = useState([]);
    let thisToken  = localStorage.getItem("token")
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:5000/favorites",{
            headers:{
                Authorization: "Bearer "+ thisToken
            }
        }).then((response)=>{
            
            setResult(response.data)
        }).catch((err)=>{
            console.log(err)
        })
        
      }, []);
      const products = result.map((element, i) => {
        return (
          <div
            className="card"
            onClick={() => {
              history.push(`product/${element._id}`);
            }}
          >
            <div className="card-image">
              <img src={element.img} />
            </div>
    
            <div className="rating"></div>
    
            <div className="card-description">
              <p className="nameProduct">Name:{element.name}</p>
              <p className="PriceProduct">Price:{element.price}</p>
            </div>
          </div>
        );
      });
    
      return <div className="category">{products}</div>;
      
}
