

import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Category from "./components/category";
import Product from "./components/Product"
import Home from "./components/Home"
import "./App.css";


const App = () => {
  const [token, setToken] = useState("");


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);


  return (
    <div className="App">
      <Navigation token={token} setToken={setToken} />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" render={() => <Login setToken={setToken} />} />
      <Route exact path="/:type" render={() => <Category token={token} />} />
	  <Route exact path ="/product/:id" render={() => <Product token={token} />}    />
    </div>
  );
};

export default App;
