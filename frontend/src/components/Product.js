import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Product({ token }) {
  console.log(token);
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
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
            authorization: "Bearer " + token.token,
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
  }, [info]);
  let arr = "";
  if (result.comment) {
    arr = result.comment.map((element, i) => {
      return (
        <div className="comment">
          <p>{element.commenter.firstName}</p>
          <p>{element.comment}</p>
        </div>
      );
    });
  }

  return (
    <>
      <div className="containerDiv">
        <div className="productHolder">
          <div className="img">
            <img src={result.img} style={{ width: "400px" }} />
          </div>
          <div className="productDes">
            <div className="desHeader">
              <button onClick={addFavorite}>Add to favorite</button>
            </div>
            <p>Name Product :{result.name}</p>
            Description :{result.description}
            <div className="desFooter">
              {" "}
              <button>Add To cart</button>
            </div>
          </div>
        </div>
        <div className="all-comment">
          <section>{arr}</section>
        </div>
        <div className="add-comment">
          <input
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button onClick={addComment}>add comment</button>
          {message ? <p>{message}</p> : ""}
        </div>
      </div>
    </>
  );
}
