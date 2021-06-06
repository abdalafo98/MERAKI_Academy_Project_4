import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, Route, Redirect } from "react-router-dom";

export default function Home() {
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
  // this for slider show
  const pics = [
    "https://slimages.macys.com/is/image/McomMedia/media/022221_KIDS_CAT_PAGE_REFRESH_04_1424198.jpg?wid=750",
    "https://www.grandfrank.com/media/catalog/product/cache/4b14b71651aa9c58cd2dd18f8b4593ed/w/h/white-tee-front_1.jpg",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1598017833-boyfriend_tee_ivory_fr_350x525_crop_center@2x.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*",
    "https://mms-images-prod.imgix.net/mms/images/catalog/ea7c14d29c326c47aeca0e61d4785655/styles/224900/catalog_detail_image_large.jpg?ixlib=rails-2.1.4&w=700&h=700&fit=fill&bg=ffffff&dpr=1&q=60&fm=pjpg&auto=compress&trim=auto&trimmd=0",
    "https://oldnavy.gap.com/webcontent/0018/682/449/cn18682449.jpg",
  ];
  const delay = 2500;
  const timeoutRef = useRef(null);

  const [index, setIndex] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
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
    <div className="containerDiv">
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
            {pics.map((backgroundColor, index) => (
              <img
                className="slide"
                key={index}
                src={backgroundColor}
                style={{ width: "100%", height: "100%" }}
              ></img>
            ))}
          </div>
        </div>
        {/* this for slider show  */}
        <div className="slideshowDots">
          {pics.map((_, idx) => (
            <div
              key={idx}
              className="slideshowDot"
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
        {/* end of slider show */}
      </div>
    </div>
  );
}
