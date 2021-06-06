import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Category({ token }) {
  const [result, setResult] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/type/${type}`)
      .then((result) => {
        setResult(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const products = result.map((element, i) => {
    return (
      <div className="product">
        <div>
          <img src={element.img} />
        </div>

        <div className="rating"></div>

        <div>
          <p>{element.name}</p>
          <p>{element.price}</p>
        </div>
      </div>
    );
  });

  return <div className="category">{products}</div>;
}
