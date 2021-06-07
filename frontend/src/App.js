import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Category from "./components/category";
import Product from "./components/Product";
import Home from "./components/Home";
import Favorites from "./components/Favorites"
import Cart from "./components/cart"
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
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" render={() => <Login setToken={setToken} />} />
      <Route exact path="/favorites" render={() => <Favorites token={token} />} />
      <Route exact path="/cart" render={() => <Cart token={token} />} />
      <Route exact path="/:type" render={() => <Category token={token} />} />
      <Route
        exact
        path="/product/:id"
        render={() => <Product token={token} />}
      />
      </Switch>
    </div>
  );
};

export default App;
