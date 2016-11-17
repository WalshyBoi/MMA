import React from 'react';
import ReactDOM from 'react-dom';
//import PhoneCatalogueApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import Fighters from  './Data';
import FighterList from './App';
import Pound4Pound from './App';
import {Router, Route, browserHistory} from 'react-router';

//Link import this shiz

ReactDOM.render((
		<Router history={browserHistory}>
		<Route path="/" component={FighterList}>
	    <Route path="p4p" component={Pound4Pound} />
		</Route>
		</Router>
), document.getElementById('root'))