import {React ,useState} from 'react';
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';

import Register from './components/Register';
import './App.css';


const App = () => {
	return <div className="App">
		<switch>
<Route exact path="/register" component={Register}/>
</switch>

	</div>;
};

export default App;
