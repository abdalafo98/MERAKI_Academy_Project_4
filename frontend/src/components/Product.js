import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/id/${id}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              <button>Add to favorite</button>
            </div>
            <p>Name Product :{result.name}</p>
            Description :{result.description}
            <div className="desFooter">
              {" "}
              <button>Add To cart</button>
            </div>
          </div>
        </div>
        <div>
          <section>{arr}</section>
        </div>
      </div>
    </>
  );
}
