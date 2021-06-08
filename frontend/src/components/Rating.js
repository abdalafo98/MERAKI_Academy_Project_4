import React, { useState } from "react";
import { Route } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function Rating({idProduct,thisToken}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const addRating = ()=>{
      axios.post(`http://localhost:5000/rating/products/${idProduct}`,
      {
        rating:rating,
      },
      {
        headers: {
          authorization: "Bearer " + thisToken,
        },
      }).then((result)=>{
          console.log(result.data)
      }).catch((err)=>{
          console.log(err)
      })
  };
  return (
    <div>
      <div className="rating">
        {[...Array(5)].map((element, i) => {
          let ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                }}
              />
              <FaStar
                size={30}
                color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
                onMouseEnter={() => {
                  setHover(ratingValue);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              />
            </label>
          );
        })}
        <button onClick={addRating}>rating</button>
      </div>
      

    </div>
  );
}
