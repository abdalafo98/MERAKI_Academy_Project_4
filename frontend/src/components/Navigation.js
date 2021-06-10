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
  const moveToMen = () => {
    history.push("/men");
    window.location.reload();
  };
  const moveToKids = () => {
    history.push("/kid");
    window.location.reload();
  };
  const moveToWomen = () => {
    history.push("/women");
    window.location.reload();
  };

  return (
    <div className="">
      <div className="Navigation-child-top">
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
              <BsSearch size={15} />
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              {" "}
              <Link className="link icon-plus-name-navbar" to="/">
                <AiOutlineHome size={27} />
                <p>Home</p>
              </Link>
            </li>
            <li>
              {" "}
              {token ? (
                <Link className="link icon-plus-name-navbar" to="/favorites">
                  <MdFavoriteBorder size={27} />
                  <p>WishList</p>
                </Link>
              ) : (
                ""
              )}
            </li>
            <li>
              {" "}
              {token ? (
                <Link className="link icon-plus-name-navbar" to="/cart">
                  <FiShoppingCart size={27} />
                  <p>Cart</p>
                </Link>
              ) : (
                ""
              )}
            </li>
            <li>
              {token ? (
                <Link className="link icon-plus-name-navbar" to="/profile">
                  <CgProfile size={27} /> <p>profile</p>
                </Link>
              ) : (
                ""
              )}
            </li>
            <li>
              {" "}
              {token ? (
                <a
                  className="link icon-plus-name-navbar icon-plus-name-navbar"
                  onClick={signOut}
                >
                  <IoMdLogOut size={27} />
                  <p>signout</p>
                </a>
              ) : (
                ""
              )}
            </li>{" "}
            <li>
              {" "}
              {!token ? (
                <Link className="link icon-plus-name-navbar" to="/login">
                  Login
                </Link>
              ) : (
                ""
              )}
            </li>{" "}
          </ul>
        </nav>
      </div>
    </div>
  );
}
