import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = () => {
    axios
      .post("http://localhost:5000/products", {
        type,
        name,
        price,
        img,
        description,
        quantity,
        role,
        rating,
        totalRating,
        averageRating,
      })
      .then((result) => {
        if (!result.data.errors) {
          history.push("/products");
        } else {
          setError(true);
          console.log(result.data.errors);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const updateProduct = ()=>{
  // 	  axios.put("http://localhost:5000/products",{
  // 		type,
  //         name,
  //         price,
  //         img,
  //         description,
  //         quantity,
  // 	  }).then((result) => {
  //         if (!result.data.errors) {
  //           history.push("/products");
  //         } else {
  //           setError(true);
  //           console.log(result.data.errors);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  return (
    <>
      <div className="dashAdd">Dashboard</div>
      <div className="addCont">
      <input className="dashInput"
        type="text"
        placeholder="type"
        onChange={(e) => {
          setType(e.target.value);
        }}
      />
      <input className="dashInput"
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input className="dashInput"
        type="text"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input className="dashInput"
        type="text"
        placeholder="img"
        onChange={(e) => {
          setImg(e.target.value);
        }}
      />
      <input className="dashInput"
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input className="dashInput"
        type="text"
        placeholder="Quantity"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <button className="dashInput" onClick={addProduct}>add product</button>
      {/* <button onClick={updateProduct} >update product</button> */}
      </div>
    </>
  );
}
