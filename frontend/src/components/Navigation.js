import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function Navigation({token}) {
  return (
    <div className="Navigation">
        <Link to="/">Home</Link>
      {!token ? <Link to="/register">Register</Link> : ""}
      {!token ? <Link to="/login">Login</Link> : ""}
    </div>
  );
}
