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
import Clock from "react-live-clock";
import "moment-timezone";
import Logo from "./../../src/logoyalla.png";

let result = JSON.parse(localStorage.getItem("cart"));

export default function Navigation({ token, setToken }) {
  const [resultCart, setResultCart] = useState(result);
  const [cart, setCart] = useState([]);
  console.log(result);
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
    <div className="Navigation">
      <div className="Navigation-child-top">
        <div className="navBar">
          <div
            class="logo"
            onClick={() => {
              history.push("/");
            }}
          >
            <img src={Logo} style={{ width: "140px", height: "130px" }} />
            <h1>YALLA SOUQ</h1>
          </div>{" "}
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
                <AiOutlineHome size={25} color={"white"} />
                <p >Home</p>
              </Link>
            </li>
            <li>
              {" "}
              {token ? (
                <Link className="link icon-plus-name-navbar" to="/favorites">
                  <MdFavoriteBorder size={25} color={"white"} />
                  <p>WishList</p>
                </Link>
              ) : (
                ""
              )}
            </li>
            <li>
              {" "}
              {token ? (
                <div id="cart-count">
                  {" "}
                  {resultCart.data.reduce((acc, element, i) => {
                    return <p>{i + 1}</p>;
                  }, 0)}
                  <Link className="link icon-plus-name-navbar" to="/cart">
                    <FiShoppingCart size={25} color={"white"} />

                    <p>Cart</p>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </li>
            <li>
              {token ? (
                <Link className="link icon-plus-name-navbar" to="/profile">
                  <CgProfile size={25} color={"white"} /> <p>profile</p>
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
                  <IoMdLogOut size={25} color={"white"} />
                  <p>sign out</p>
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
            <li>
              <Clock
                format={"h:mm:ssa"}
                style={{ fontSize: "1.2em" }}
                ticking={true}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
