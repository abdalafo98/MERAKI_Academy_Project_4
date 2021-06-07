import axios from "axios";
import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Cart from "./../../src/cart.png";
export default function Navigation({ token, setToken }) {
  const [searched, setSearched] = useState("")
  const history = useHistory();
  const signOut = () => {
    setToken("");
    localStorage.clear();
  };

  const searchBtn=()=>{

    axios.get(`http://localhost:5000/products/name/${searched}`)
    .then((result)=>{
      
      history.push(`/product/${result.data[0]._id}`)
    })
    .catch((err)=>{
      
    })


  }


  return (
    <div className="Navigation">
      <header>
        {" "}
        <h1
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          THE <span> MOUNTAIN</span>
        </h1>
        <nav>
          <ul className="nav">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li> {token ? <Link to="/cart">cart</Link> : ""}</li>
            <li> {token ? <Link to="/favorites">favorites</Link> : ""}</li>
            <li> {token ? <a onClick={signOut}>Sign Out</a> : ""}</li>{" "}
            <li> {!token ? <Link to="/login">Login</Link> : ""}</li>
          </ul>
        </nav>
      </header>
       <div className="searchS">
         <input className="searchInput" type="text" placeholder="Search.." onChange={(e)=>{
            setSearched(e.target.value)
          }}>
         </input><button className="searchBtn" onClick={searchBtn}>Ok</button></div>
    </div>
  );
}
