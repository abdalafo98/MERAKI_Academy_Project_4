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
import AddProduct from "./components/dashboard/AddProduct"
import EditProduct from "./components/dashboard/EditProduct"
import Dashboard from "./components/Dashboard"
import "./App.css";

const App = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <>
      {role==="admin" ? <Switch><Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/add" component={AddProduct} />
    <Route exact path="/dashboard/edit" render={()=><EditProduct token={token}/>} />
    </Switch>
       
    :<div className="App">
     <Navigation token={token} setToken={setToken} />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/register" component={Register} />
     <Route exact path="/login" render={() => <Login setToken={setToken} setRole={setRole}/>} />
     <Route exact path="/favorites" render={() => <Favorites token={token} />} />
     <Route exact path="/cart" render={() => <Cart token={token} />} />
     <Route exact path="/:type" render={() => <Category token={token} />} />
     <Route
       exact
       path="/product/:id"
       render={() => <Product token={token} />}
     />
     </Switch>
   </div>}
    
    </>
  );
};

export default App;
