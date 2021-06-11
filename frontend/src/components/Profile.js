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
        // console.log(result);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const a = myOrder.map((element, i) => {
    // console.log(element.Quantity);
    // const productss = element.products[i].product;
    // console.log(productss.price);

    const modifyMyInfo = () => {
      axios
        .put(`http://localhost:5000/order`, {
          headers: {
            authorization: "Bearer " + thisToken,
          },
        })
        .then((result) => {})
        .catch((err) => {
          // console.log(err);
        });
    };

    return (
      <div className="user-info">
        <p># {i + 1} Order</p>
        <p>
          {" "}
          <span> date: </span>
          {element.date}{" "}
        </p>

        <p>
          {" "}
          <span> Total Price: </span>
          {element.totalPrice}{" "}
        </p>

        <p>
          {" "}
          <span> Quantity: </span>
          {/* {element.map((ele, index) => {
            return ele.products[i].product.name;
          })} */}
        </p>
      </div>
    );
  });

  const ModifyUserInfo = () => {};

  // let b = myOrder.map((element, i) => {
  //   const product = element.products[i];
  //   console.log(element.products[i]._id);
  //   return (
  //     <div>
  //       <p>{element.products[i]._id}</p>
  //     </div>
  //   );
  // });
  return (
    <div className="profile">
      <div>
        <img
          src={result.gender == "male" ? profileMen : profileFemale}
          height={200}
          width={200}
        />
        <FaUserEdit
          size={40}
          color={"black"}
          onClick={() => {
            history.push("profile/edit");
          }}
        />
      </div>
      <div className="information">
        <p id="your-information">Your Information</p>

        <div className="user-info">
          <p>
            <span> Full Name: </span>
            {result.firstName} {result.lastName}
          </p>
          <p>
            {" "}
            <span>age: </span>
            {result.age}
          </p>
          <p>
            {" "}
            <span>Phone Number: </span>
            {result.phoneNumber}
          </p>
          <p>
            {" "}
            <span>Email: </span>
            {result.email}
          </p>
          <p>
            {" "}
            <span>Gender:</span> {result.gender}
          </p>
          <p>
            {" "}
            <span>country:</span> {result.country}
          </p>
        </div>
      </div>{" "}
      <div className="information scroll">
        <p id="your-information">Your Orders</p>
        {a}
      </div>
    </div>
  );
};

export default Profile;
