import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function Navigation({ token, setToken }) {
  const signOut = () => {
    setToken("");
    localStorage.clear();
  };

  const ssds = () => {
    return;
  };
  return (
    <div className="Navigation">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li> {!token ? <Link to="/login">Login</Link> : ""}</li>
        <li> {token ? <a onClick={signOut}>Sign Out</a> : ""}</li>
      </ul>
    </div>
  );
}
