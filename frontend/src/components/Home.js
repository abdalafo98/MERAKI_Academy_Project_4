import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, Route, Redirect } from "react-router-dom";

export default function Home() {
  const [pics, setPics] = useState([]);

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
 

  const delay = 2500;
  const timeoutRef = useRef(null);
  
  const [index, setIndex] = useState(0);
  
  function resetTimeout() {
      if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    
    useEffect(() => {

        axios
          .get("http://localhost:5000/slider")
          .then((result) => {
            
              setPics(result.data.picsAddress)
          })
          .catch((err) => {
            console.log(err);
          });

        resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pics.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
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

      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div style={{ width: "100%", height: "300px" }}>
            {pics?pics.map((backgroundColor, index) => (
              <img
                className="slide"
                key={index}
                src={backgroundColor}
                style={{ width: "100%", height: "100%" }}
              ></img>
            )):[]}
          </div>
        </div>
        {/* this for slider show  */}
        <div className="slideshowDots">
          {pics?pics.map((_, idx) => (
            <div
              key={idx}
              className="slideshowDot"
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          )):[]}
        </div>
        {/* end of slider show */}
      </div>
    </div>
  );
}
