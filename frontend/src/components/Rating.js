import React, { useState } from "react";
import { Route } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      <div className="App">
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
      </div>
    </div>
  );
}
