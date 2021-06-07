import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
export default function Cart({ token }) {
  const [result, setResult] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalprice, setTotalprice] = useState(0);
  let thisToken = localStorage.getItem("token");
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart", {
        headers: {
          Authorization: "Bearer " + thisToken,
        },
      })
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cartUser = result.map((element, i) => {
    console.log(price);
    return (
      <tr>
        <td>
          <div className="cart-info">
            <img src={element.img} />
            <div>
              <p>{element.name}</p>
              <small> price: {element.price} JD</small>
            </div>
          </div>
        </td>
        <td>
          <input
            type="number"
            defaultValue="1"
            id={i + 1}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </td>

        <td id={i + 1}>{element.price * quantity} JD</td>
      </tr>
    );
  });

  const totalPrice = result.reduce((acc, element) => acc + element.price, 0);

  return (
    <div className="small-container cart-page">
      <h2>My Cart</h2>
      {
        <table>
          <tr>
            <th id="pr">Products</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartUser}
        </table>
      }
      <div className="total-price">
        <table>
          <tr>
            <td>Total</td>
            <td>{totalPrice} JD</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>*{quantity}</td>
          </tr>
          <button>Checkout</button>
        </table>
      </div>
    </div>
  );
}
