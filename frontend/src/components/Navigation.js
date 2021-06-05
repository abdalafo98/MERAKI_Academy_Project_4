import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function Navigation({ token , setToken }) {
    const signOut = ()=>{
        setToken("")
        localStorage.clear()
    };
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      {!token ? <Link to="/register">Register</Link> : ""}
      {!token ? <Link to="/login">Login</Link> : ""}
      {token ? <button onClick={signOut} >Sign Out</button> : ""}
    </div>
  );
}
