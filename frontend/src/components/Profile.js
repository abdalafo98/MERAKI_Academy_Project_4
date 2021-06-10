import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { CgInsertAfterO } from "react-icons/cg";
import profileFemale from "./../../src/profile-female.png";
import profileMen from "./../../src/profile-men.png";

const Profile = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();
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
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("asdasdsadsadadsa");

  return (
    <div>
      <div className="user-info">
        <div>
          <img
            src={result.gender == "male" ? profileMen : profileFemale}
            height={200}
            width={200}
          />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Profile;
