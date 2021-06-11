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
    <div className="information">
      <p id="your-information">Your Information</p>

      <div className="user-info">
        <span> first Name: </span>
        <input
          placeholder={result.data.firstName + result.data.lastName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />{" "}
        <span> Last Name: </span>
        <input
          placeholder={result.data.firstName + result.data.lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <span>age: </span>
        <input
          placeholder={result.data.age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />{" "}
        <span>Phone Number: </span>
        <input
          placeholder={result.data.phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <p>
          {" "}
          <span>Email: </span>
          <input value={result.data.email} />
        </p>
        <p>
          {" "}
          <span>Gender:</span>
          <input
            placeholder={result.data.gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </p>
        <p>
          {" "}
          <span>country:</span>
          <input
            placeholder={result.data.country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </p>
        <button onClick={modifyInfo}>Update</button>
      </div>
    </div>
  );
};

export default EditUserInfo;
