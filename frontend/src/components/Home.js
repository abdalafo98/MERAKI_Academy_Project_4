import { React, useState } from "react";
import axios from "axios";
import { useHistory,Route, Redirect } from "react-router-dom";

export default function Home() {

    
    const history = useHistory();
    const moveToMen =()=>{
        history.push("/men");
    }
    const moveToWomen =()=>{
        history.push("/women");
    }
    const moveToKids =()=>{
        history.push("/kids");
    }
    return (
        <div className="containerDiv">
            <div className="homeHeader">
                <div className="sectionNav"onClick={moveToMen}>Men</div>
                <div className="sectionNav" onClick={moveToWomen}>Kids</div>
                <div className="sectionNav" onClick={moveToKids}>Womens</div>
            </div>
            <div className="slideshowContainer">

                <div className="mySlidesFade">
                    
                </div>

            </div>
            
        </div>
    )
}
