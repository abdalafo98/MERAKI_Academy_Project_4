import axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function EditProduct({token}) {
const [idValue, setIdValue] = useState("")
const [description, setDescription] = useState("")
const [quantity, setQuantity] = useState("")
const [type, setType] = useState("")
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [img, setImg] = useState("")
const thisToken = localStorage.getItem("token");

const findId = ()=>{
   axios.get(`http://localhost:5000/products/id/${idValue}`)
    .then((result)=>{
        console.log(result);
        setDescription(result.data.description)
        setQuantity(result.data.quantity)
        setType(result.data.type)
        setName(result.data.name)
        setPrice(result.data.price)
        setImg(result.data.img)
    }).catch((err)=>{
        console.log(err);
    })
}
console.log(thisToken);
const edit = ()=>{
    axios
    .put(
      `http://localhost:5000/products/id/${idValue}`,
  
      {
        description:description ,
        quantity:quantity,
        type:type,
        name:name,
        price:price,
        img:img,
      },
      {
        headers: {
          Authorization: "Bearer " + thisToken,
        }
      }
    )
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const deletBtn = ()=>{
      axios.delete(`http://localhost:5000/products/id/${idValue}`)
      .then((result)=>{
        console.log("deleted");
      }).catch((err)=>{
          console.log(err);
      })
      
  }
  //jxs html +javascript
    return (
        <div>
       <div>
           <input placeholder="Product ID" onChange={(e)=>{
             setIdValue(e.target.value) 
           }}></input>
           <button onClick={findId}>find product</button>
           </div>
           <div>
           <textarea className="textEdit" name="quantity" placeholder={description} onChange={(e)=>{
                   setDescription(e.target.value)
               }}></textarea>
               <textarea className="textEdit" name="quantity" placeholder={quantity} onChange={(e)=>{
                   setQuantity(e.target.value)
               }}></textarea>
               <textarea className="textEdit" name="type"  placeholder={type} onChange={(e)=>{
                   setType(e.target.value)}}></textarea>

               <textarea className="textEdit" name=""  placeholder={name} onChange={(e)=>{
                   setName(e.target.value)}}></textarea>

               <textarea className="textEdit" name="" placeholder={price} onChange={(e)=>{
                   setPrice(e.target.value)}}></textarea>
               <textarea className="textEdit" name=""placeholder= {img} onChange={(e)=>{
                   setImg(e.target.value)}}></textarea>
               <button onClick={edit}>Edit</button>
               <button onClick={deletBtn}>Delete</button>
           </div>
   
        </div>
    )
}
