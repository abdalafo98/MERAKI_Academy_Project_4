import { React, useState } from "react";
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
  return (
    <div className="">
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
      <div className="slideshowContainer">
        <div className="mySlidesFade"></div>
      </div>
    </div>
  );
}
