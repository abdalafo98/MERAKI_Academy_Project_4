import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { CgInsertAfterO } from "react-icons/cg";

const Profile = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();
  let thisToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/id/${id}`)
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
      <h1>Full Name:{result.firstName}</h1>
    </div>
  );
};

export default Profile;
