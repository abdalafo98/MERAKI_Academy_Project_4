import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Cart from "./../../src/cart.png";
export default function Navigation({ token, setToken }) {
  const history = useHistory();
  const signOut = () => {
    setToken("");
    localStorage.clear();
  };

  return (
    <div className="Navigation">
      <header>
        {" "}
        <h1
          class="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          THE <span> MOUNTAIN</span>
        </h1>
        <input type="text" placeholder="Search.."></input>
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
    </div>
  );
}
