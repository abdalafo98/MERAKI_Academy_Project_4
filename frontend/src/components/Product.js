import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Product({ token }) {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [inFav, setInFav] = useState(false)
  const idProduct = result._id;
  const thisToken = localStorage.getItem("token");
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
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {})
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
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const addCart = () => {
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
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/id/${id}`,)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(`http://localhost:5000/favorites/${id}`,{
        headers:{
            Authorization: "Bearer "+ thisToken
        }
    }).then((result)=>{
      console.log(result.data)
      if(result.data === "found"){
        setInFav(true)
        setInfo(Math.random());
      }else{
        setInFav(false)
        setInfo(Math.random());
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [info]);

  let allComment = "";
  if (result.comment) {
    allComment = result.comment.map((element, i) => {
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
            { !inFav ? <button onClick={addFavorite}>Add to favorite</button> : ""}
            { inFav ? <button onClick={deleteFav}>delete from favorite</button> : ""}
              
            </div>
            <p>Name Product :{result.name}</p>
            Description :{result.description}
            <div className="desFooter">
              {" "}
              <button onClick={addCart}>Add To cart</button>
            </div>
          </div>
        </div>
        <div className="all-comment">
          <section>{allComment}</section>
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
