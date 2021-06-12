import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { CgInsertAfterO } from "react-icons/cg";
import profileFemale from "./../../src/profile-female.png";
import profileMen from "./../../src/profile-men.png";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const [result, setResult] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
  const history = useHistory();

  const [Date, setDate] = useState("");

  let thisToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/id/`, {
        headers: {
          authorization: "Bearer " + thisToken,
        },
      })
      .then((result) => {
        setResult(result.data);
        localStorage.setItem("userInfo", JSON.stringify(result));
      })
      .catch((err) => {
        // console.log(err);
      });

    axios
      .get(`http://localhost:5000/order`, {
        headers: {
          authorization: "Bearer " + thisToken,
        },
      })
      .then((result) => {
        setMyOrder(result.data);
      })
      .catch((err) => {});
  }, []);

  const a = myOrder.map((element, i) => {
    

    return (
      <div>
        <p id="order-number">#{i + 1} Order</p>
        <div className="user-info">
          <div id="order">
            <div class="inf">
              <p>
                {" "}
                <span className="info-span"> date: </span>
                {element.date}{" "}
              </p>

              <p>
                {" "}
                <span className="info-span"> Total Price: </span>
                {element.totalPrice}{" "}
              </p>
            </div>

            <p class="product-info">
              {" "}
              <span className="info-span"> Order Info: </span>
            </p>
            {element.products.map((ele, i) => {
              return (
                <div class="info-order">
                  <div class="img-order">
                    <p>#{i + 1}</p>
                    <img src={ele.product.img} height={50} width={50} />
                  </div>

                  <div class="product-information">
                    <p>Name Product: {ele.product.name}</p>
                    <p>price: {ele.product.price} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="profile-container">
      <div className="profile-pic-Info">
       <div className="profile-pic">
        <img
          src={result.gender == "male" ? profileMen : profileFemale}
          height={200}
          width={200}
        />
        <FaUserEdit
          size={30}
          color={"Green"}
          onClick={() => {
            history.push("profile/edit");
          }}
        />
        </div>
        <div className="user-info">
          <p>
            <span className="info-span"> Full Name: </span>
            {result.firstName} {result.lastName}
          </p>
          <br/>
          <p>
            {" "}
            <span className="info-span">Age: </span>
            {result.age}
          </p>
          <br/>
          <p>
            {" "}
            <span className="info-span">Phone Number: </span>
            {result.phoneNumber}
          </p>
          <br/>
          <p>
            {" "}
            <span className="info-span">Email: </span>
            {result.email}
          </p>
          <br/>
          <p>
            {" "}
            <span className="info-span">Gender:</span> {result.gender}
          </p>
          <br/>
          <p>
            {" "}
            <span className="info-span">country:</span> {result.country}
          </p>
        </div>
      </div>
      <div className="user-orders">
        <p id="your-information">My Orders</p>
        {a}
      </div>
    </div>
  );
};

export default Profile;
