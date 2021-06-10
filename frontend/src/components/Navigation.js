import axios from "axios";
import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Cart from "./../../src/cart.png";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

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
            placeholder="Search.. "
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          ></input>
          <button className="searchBtn" onClick={searchBtn}>
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link className="link" to="/">
              <AiOutlineHome size={27} />
            </Link>
          </li>
          <li>
            {" "}
            {token ? (
              <Link className="link" to="/favorites">
                <MdFavoriteBorder size={27} />
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {" "}
            {token ? (
              <Link className="link" to="/cart">
                <FiShoppingCart size={27} />
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {token ? (
              <Link className="link" to="/profile">
                <CgProfile size={27} />{" "}
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {" "}
            {token ? (
              <a className="link" onClick={signOut}>
                <IoMdLogOut size={27} />
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
