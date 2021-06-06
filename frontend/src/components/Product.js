import { React, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [result, setResult] = useState("");
  axios
    .get(`http://localhost:5000/products/id/${id}`)
    .then((result) => {
      console.log(result.data);
      setResult(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
    <div className="containerDiv">
        <div className="productHolder">
      <div className="img">
        <img src={result.img} style={{width:'400px'}} />
      </div>
      <div className="productDes">
          <div className="desHeader"><button>Add to favorite</button></div>
        <p>Name Product :{result.name}</p> 
        Description :
        {result.description}
        <div className="desFooter"> <button>Add To cart</button></div>
       
      </div>
      </div>
      <div>
      <section> rating and comments</section>
      </div>
      </div>
    </>
  );
}
