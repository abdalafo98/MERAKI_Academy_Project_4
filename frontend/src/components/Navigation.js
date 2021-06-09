
import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Cart from "./../../src/cart.png";
import { BiSearch } from "react-icons/bi";
export default function Navigation({ token, setToken }) {
  const [searched, setSearched] = useState("");
  const history = useHistory();
  const signOut = () => {
    setToken("");
    history.push(`/login`);

    localStorage.clear();
  };

  const searchBtn = () => {
    history.push(`/searched/${searched}`);
  };

  return (
    <div className="Navigation">
      <div className="navBar">
        <div className="logo">
          <h1
            class="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            We <span> Buy</span>
          </h1>{" "}
        </div>
        <div className="searchS">
          <input
            className="searchInput"
            type="text"
            placeholder="Search.."
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          ></input>
          <button className="searchBtn" onClick={searchBtn}>
          <BiSearch/>
          </button>
        </div>
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
