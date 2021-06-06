import React, { useState , useEffect  } from "react";
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import Navigation from "./components/Navigation"
import Register from './components/Register';
import Login from "./components/Login"
import Home from "./components/Home"


import './App.css';


const App = () => {
	const [token, setToken] = useState('');

	useEffect(() =>{
        if(localStorage.getItem("token")){
			setToken(localStorage.getItem("token"))
		}
    }, []);
	
	return <div className="App">
<Navigation token = {token} setToken={setToken} />
<Route exact path="/" component={Home}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/login" render={() => <Login setToken={setToken}  />} />

	</div>;
};

export default App;
