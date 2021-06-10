import { React, useState, useEffect } from "react";
import Rating from "./Rating";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ShowRating from "./ShowRating";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export default function Product({ token }) {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const [inFav, setInFav] = useState(false);
  const [userRateThisProduct, setUserRateThisProduct] = useState(false);
  const [userRate, setUserRate] = useState(null);
  const idProduct = result._id;
  const thisToken = localStorage.getItem("token");
  const thisRole = localStorage.getItem("role");
  const addComment = () => {
    axios
      .post(
        `http://localhost:5000/products/${id}/comments`,
        {
          comment,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setInfo(Math.random());
        document.getElementById("textArea-comment").value = "";
      })
      .catch((err) => {
        if (err) {
          setMessage("you need to login first");
        }
      });
  };
  const addFavorite = () => {
    axios
      .post(
        `http://localhost:5000/favorites`,
        {
          productId: result._id,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setInfo(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteFav = () => {
    axios
      .put(
        "http://localhost:5000/favorites",

        {
          productId: idProduct,
        },
        {
          headers: {
            authorization: "Bearer " + thisToken,
          },
        }
      )
      .then((result) => {
        setInfo(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCart = () => {
    axios
      .post(
        `http://localhost:5000/cart`,
        {
          productId: result._id,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/id/${id}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:5000/favorites/${id}`, {
        headers: {
          Authorization: "Bearer " + thisToken,
        },
      })
      .then((result) => {
        if (result.data === "found") {
          setInFav(true);
          setInfo(0);
        } else {
          setInFav(false);
          setInfo(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:5000/rating/products/${id}`, {
        headers: {
          Authorization: "Bearer " + thisToken,
        },
      })
      .then((result) => {
        if (result.data.found === "found") {
          setUserRate(result.data.rate);
          setUserRateThisProduct(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [info]);

  let allComment = "";
  if (result.comment) {
    allComment = result.comment.map((element, i) => {
      return (
        <div className="bottom-section-comment">
          <p id="first-name">{element.commenter.firstName}</p>
          <p>{element.comment}</p>
        </div>
      );
    });
  }
  return (
    <>
      <div className="product-view">
        <div className="top-section bottom-margin">
          <div className="top-img">
            <img src={result.img} />
          </div>
          <div className="top-info">
            <p id="name-product">{result.name}</p>
            <span style={{ fontWeight: "bold" }}>Details </span>
            {result.description}
            {!userRateThisProduct ? (
              <Rating
                idProduct={idProduct}
                thisToken={thisToken}
                setInfo={setInfo}
              />
            ) : (
              <ShowRating rate={userRate} />
            )}

            <button id="add-cart" onClick={addCart}>
              Add Cart{" "}
            </button>
          </div>
          {!inFav ? (
            <AiOutlineHeart
              icon="heart"
              id="add-favorite"
              onClick={addFavorite}
            />
          ) : (
            ""
          )}
          {inFav ? (
            <AiFillHeart icon="heart" id="delete-fav" onClick={deleteFav} />
          ) : (
            ""
          )}
        </div>

        <div className="bottom-section">
          <textarea
            id="textArea-comment"
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <button id="add-comment" onClick={addComment}>
            Comment
          </button>
          {message ? <p>{message}</p> : ""}
          <div id="comment"> {allComment}</div>
        </div>
      </div>
    </>
  );
}
