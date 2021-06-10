import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ShowRating from "./ShowRating";

export default function Category({ token }) {
  const [filterVal, setFilterVal] = useState("")
  const [result, setResult] = useState([]);
  const { type } = useParams();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/type/${type}`)
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div className="card-description">
          <ShowRating rate={Math.round(element.averageRating)} />
          <p className="nameProduct">Name:{element.name}</p>
          <p className="PriceProduct">Price:{element.price}</p>
        </div>
      </div>
    );
  });
  

  const searchFilter =()=>{
    axios
    .get(`http://localhost:5000/products/filter/${type}/${filterVal}`)
    .then((result) => {
      setResult(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
    
    

  }

  return (
  <div className="CategoryContainer">
    
    <div className="searchFilter">
     <div className="radioStyle">
        <input type="radio" name="priceCheckbox" value={10} style={{display:"initial"}} onClick={()=>{setFilterVal(10)}}/>`Under 10 JD`
        <input type="radio" name="priceCheckbox" value={20} style={{display:"initial"}} onClick={()=>{setFilterVal(20)}}/>`Under 20 JD`
        <input type="radio" name="priceCheckbox" value={50} style={{display:"initial"}} onClick={()=>{setFilterVal(50)}}/>`Under 50 JD`
        <input type="radio" name="priceCheckbox" value={10000} style={{display:"initial"}} onClick={()=>{setFilterVal(10000)}}/>`All`
        <button onClick={searchFilter}>Search</button>
        </div>
    </div>
  <div className="category">  {products}</div>
  <div className="categoryAds">
  
    <div className="ads" ></div>
    <div className="ads" ></div>
    <div className="ads" ></div>
  </div>
    
    </div>)
}
