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
    <div className="navBar">
      <div className="logo">
        <h1
          class="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          THE <span> MOUNTAIN</span>
        </h1>{" "}
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            {token ? (
              <Link className="link" to="/cart">
                cart
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {" "}
            {token ? (
              <Link className="link" to="/favorites">
                favorites
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {" "}
            {token ? (
              <a className="link" onClick={signOut}>
                Sign Out
              </a>
            ) : (
              ""
            )}
          </li>{" "}
          <li>
            {" "}
            {!token ? (
              <Link className="link" to="/login">
                Login
              </Link>
            ) : (
              ""
            )}
          </li>{" "}
        </ul>
      </nav>
    </div>
  );
}
