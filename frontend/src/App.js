import {React ,useState} from 'react';
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import Navigation from "./components/Navigation"
import Register from './components/Register';
import Login from "./components/Login"
import './App.css';


const App = () => {
	const [token, setToken] = useState('');
	return <div className="App">
<Navigation token = {token} />
<Route exact path="/register" component={Register}/>
<Route exact path="/login" render={() => <Login setToken={setToken}  />} />


	</div>;
};

export default App;
