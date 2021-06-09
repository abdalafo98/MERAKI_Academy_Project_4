import React from 'react'
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
export default function Dashboard() {
    const history = useHistory();
const Add  =()=>{
    history.push("/dashboard/add")
}
const Edit =()=>{
    history.push("./dashboard/edit")
}    
    return (
        <div className="dashCon">
        <div className="dashSwitch">
        <button className="dahsBtn" onClick={Add }>Add products</button>
        <button className="dahsBtn" onClick={Edit}>Edit products</button>
        </div>
        </div>
    )
}
