import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, Route, Redirect } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';


export default function Home() {
 
  // const [images, setImages] = useState([]);
  const slideImages = [
    "https://media.istockphoto.com/photos/child-girl-cotton-bright-summer-clothes-set-collage-isolated-picture-id508756496?k=6&m=508756496&s=612x612&w=0&h=T-8F9hOu6yKeuR3ARBHXyI-j0LvWS1Mbc7rRBHPDtQg=",
    'https://jade-media.jadeblue.com/media/wysiwyg/jadeblue/jadeblue-new.jpg',
    'https://media.vertbaudet.co.uk/Medias/3-1-3/93/1/image-01-jpg_m-1186711880.jpg',
    'https://jade-media.jadeblue.com/media/wysiwyg/jadeblue/jadeblue-new.jpg',
    'https://jade-media.jadeblue.com/media/wysiwyg/jadeblue/jadeblue-new.jpg',
  ];
   

  const history = useHistory();
  const moveToMen = () => {
    history.push("/men");
  };
  const moveToKids = () => {
    history.push("/kid");
  };
  const moveToWomen = () => {
    history.push("/women");
  };

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/slider")
      .then((result) => {
        // setImages(result.data.picsAddress[0]);
      })
      .catch((err) => {
        console.log(err);
      });

  
  }, []);
  // end of slider show

  return (
    <div>
      <div className="homeHeader">
        <div className="sectionNav" onClick={moveToMen}>
          Men
        </div>
        <div className="sectionNav" onClick={moveToKids}>
          Kids
        </div>
        <div className="sectionNav" onClick={moveToWomen}>
          Women
        </div>
      </div>

      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="imageSlider" style={{ 'backgroundImage': `url(${slideImages[0]})`  }}>

            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{ 'backgroundImage': `url(${slideImages[3]})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div className="imageSlider" style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
            </div>
          </div>
        </Slide>
      </div>
      <div className="homebody">
      <div className="sectionNavBody" onClick={moveToMen} style={{'backgroundImage': `url(https://jade-media.jadeblue.com/media/wysiwyg/jadeblue/jadeblue-new.jpg)`}}>
       
        </div>
        <div className="sectionNavBody" onClick={moveToKids} style={{'backgroundImage': `url(https://i.pinimg.com/originals/61/47/12/614712f5f6f0ea8e80c77e9ed9bc2359.jpg)`}}>
         
        </div>
        <div className="sectionNavBody" onClick={moveToWomen} style={{'backgroundImage': `url(https://cdn.shopify.com/s/files/1/0020/9544/8117/files/VOF_Veil_of_Faith_Banners_6002dce5-18be-40d8-811d-94bc50beda18_x800.png?v=1622703826)`}}>
         
        </div>
      </div>
      <div className="homefotter">
      <h3>  <span>about us</span></h3>
       <h3> <span>contact us</span></h3>
      </div>

     
    </div>
  );
}
