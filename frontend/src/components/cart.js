import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import priceIcon from "./../../src/price.png";
import deleteIcon from "./../../src/delete.png";
export default function Cart({ token }) {
  const [result, setResult] = useState([]);
  const [deleteItem, setDeleteItem] = useState(0);
  const idProduct = result._id;

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
  const deleteItems = () => {
    axios
      .put(
        "http://localhost:5000/cart",

        {
          productId: deleteItem,
        },
        {
          headers: {
            authorization: "Bearer " + thisToken,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Product = (element) => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [totalprice, setTotalprice] = useState(0);
    console.log(element.props.price);
    return (
      <tr>
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
                setDeleteItem(element._id);
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
        <td>
          <input
            type="number"
            defaultValue="1"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </td>

        <td>{element.props.price * quantity} JD</td>
      </tr>
    );
  };

  const cartUser = result.map((element, i) => {
    return <Product props={element} />;
  });

  const totalPrice = result.reduce((acc, element) => acc + element.price, 0);

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
            {cartUser.length > 0 ? cartUser : "Not Found"}
          </tbody>
        </table>
      }
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{totalPrice} JD</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>*{}</td>
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
