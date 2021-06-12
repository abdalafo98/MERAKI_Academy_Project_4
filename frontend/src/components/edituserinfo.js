import React, { useState } from "react";
import axios from "axios";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

const result = JSON.parse(localStorage.getItem("userInfo"));

const EditUserInfo = () => {
  const history = useHistory();

  const [lastName, setLastName] = useState(result.lastName);
  const [firstName, setFirstName] = useState(result.firstName);
  const [age, setAge] = useState(result.age);
  const [phoneNumber, setPhoneNumber] = useState(result.phoneNumber);
  const [gender, setGender] = useState(result.gender);
  const [country, setCountry] = useState(result.country);
  let thisToken = localStorage.getItem("token");

  const modifyInfo = () => {
    axios
      .put(
        `http://localhost:5000/user/editUser`,

        {
          firstName,
          lastName,
          age,
          phoneNumber,
          gender,
          country,
        },

        {
          headers: {
            authorization: "Bearer " + thisToken,
          },
        }
      )
      .then((result) => {
        history.push("/profile");
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="edit-info">
      <p id="your-information"> Edit Your Profile</p>

      <div className="user-info1">
        <div class="info-s">
          <span> first Name: </span>
          <br />
          <span> Last Name: </span>
          <br />
          <span>age: </span>
          <br />
          <span>Phone Number: </span>
          <br />
          <span>Email: </span>
          <br />
          <span>Gender: </span>
          <br />
          <span>country:</span>
        </div>
        <div className="input-edit">
          <input
            placeholder={result.data.firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />{" "}
          <input
            placeholder={result.data.lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />{" "}
          <input
            placeholder={result.data.age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />{" "}
          <input
            placeholder={result.data.phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />{" "}
          <input id="email" value={result.data.email} />
          <input
            placeholder={result.data.gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />{" "}
          <input
            placeholder={result.data.country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <br />
          <button onClick={modifyInfo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
