import {React ,useState} from 'react';
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';

import Register from './components/Register';
import Login from "./components/Login"
import './App.css';


const App = () => {
	return <div className="App">
		<switch>
<Route exact path="/register" component={Register}/>
<Route exact path="/login" component={Login}/>
</switch>

	</div>;
};

export default App;
