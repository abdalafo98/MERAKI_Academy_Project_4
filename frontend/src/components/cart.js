import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import priceIcon from "./../../src/price.png";
import deleteIcon from "./../../src/delete.png";
export default function Cart({ token }) {
  const [result, setResult] = useState([]);
  const [tot, setTot] = useState(0);
  const [total, setTotal] = useState(0);
  let [totalQuantity, setTotalQuantity] = useState(tot);
  let thisToken = localStorage.getItem("token");
  localStorage.setItem("totalPriceP", tot);
  localStorage.setItem("totalQuantity", totalQuantity);
  const history = useHistory();
  console.log(tot);
  localStorage.getItem("totalPriceP");
  localStorage.getItem("totalQuantity");
  localStorage.getItem("quantity");
  localStorage.getItem("subTotal");
  localStorage.getItem("counter");

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

  const Product = (element) => {
    const [price, setPrice] = useState(0);
    let [quantity, setQuantity] = useState(1);
    let [subTotal, setSubTotal] = useState(element.props.price * quantity);
    const [counter, setCounter] = useState(1);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("subTotal", subTotal);
    localStorage.setItem("counter", counter);

    return (
      <tr className="product">
        <td>
          <div className="cart-info-2">
            <img
              id="deleteProduct"
              src={deleteIcon}
              onClick={() => {
                axios
                  .put(
                    "http://localhost:5000/cart",
                    {
                      productId: element.props._id,
                    },
                    {
                      headers: {
                        authorization: "Bearer " + thisToken,
                      },
                    }
                  )
                  .then((result) => {
                    console.log(result);
                    window.location.reload();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
            <div
              className="cart-info"
              key={element._id}
              onChange={(e) => {}}
              onClick={() => {
                history.push(`product/${element.props._id}`);
              }}
            >
              <img src={element.props.img} />
              <div>
                <p>{element.props.name}</p>
                <small>
                  {" "}
                  <img src={priceIcon} /> {element.props.price} JD
                </small>
              </div>
            </div>
          </div>
        </td>
        <td id="quantity-counter">
          <p
            class="counter"
            onClick={() => {
              setCounter(quantity + 1);
              setQuantity(counter);
              setTot(element.props.price * quantity + tot);
              setTotalQuantity((totalQuantity += quantity));
              setSubTotal(element.props.price * quantity);
            }}
          >
            +
          </p>
          <input
            type="number"
            defaultValue="1"
            min="1"
            value={counter > 0 ? counter : 1}
            max={`${element.props.quantity}`}
            onChange={(e) => {
              setQuantity(counter);
              setTot(element.props.price * quantity + tot);
              setTotalQuantity((totalQuantity += quantity));
              setSubTotal(element.props.price * quantity);
              console.log(e.target.value);
            }}
            readOnly
          />
          <p
            class="counter"
            onClick={() => {
              setCounter(quantity - 1);
              setQuantity(counter);
              setTot(element.props.price * quantity - tot);
              setTotalQuantity((totalQuantity -= quantity));
              setSubTotal(element.props.price * quantity);
            }}
          >
            -
          </p>
        </td>

        <td>{subTotal} JD</td>
      </tr>
    );
  };

  const cartUser = result.map((element, i) => {
    return <Product props={element} />;
  });

  const totalPrice = result.reduce((acc, element) => acc + element.price, 0);
  console.log(totalPrice);

  return (
    <div className="small-container cart-page">
      <h2>My Cart</h2>
      {
        <table>
          <tbody>
            <tr>
              <th id="pr">Products</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {cartUser.length > 0 ? (
              cartUser
            ) : (
              <h3 id="not-found"> You don't have any product</h3>
            )}
          </tbody>
        </table>
      }
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{tot + totalPrice} JD</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>*{totalQuantity < 0 ? 0 : totalQuantity}</td>
            </tr>
            <tr>
              <small className="btn-checkout">Checkout</small>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
