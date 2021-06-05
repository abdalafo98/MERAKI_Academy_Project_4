import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login({ setToken }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const chick = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.status === 200) {
          setToken(result.data.token);
          history.push("/");
        }
      })
      .catch((err) => {
        setLoginError(err.response.data.message);
      });
  };
  return (
    <div className="containerDiv">
      <div className="loginDiv"></div>
      <input
        className="registerInput"
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="registerInput"
        type="Password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="registerBtn" onClick={chick}>
        Register
      </button>
      <div>{loginError ? <p className="errCreated">{loginError}</p> : ""}</div>
    </div>
  );
}
