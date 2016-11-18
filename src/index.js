import React from 'react';
import ReactDOM from 'react-dom';
//import PhoneCatalogueApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import Fighters from  './Data';
import {FighterList} from './App';
import {Pound4Pound} from './App';
import {HeavyWeight} from './App';
import {LightWeight} from './App';
import {WelterWeight} from './App';
import {FeatherWeight} from './App';

import {Fighter} from './App';
import {Router, Route, browserHistory} from 'react-router';

//Link import this shiz


ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={FighterList}>
    <Route path="Home" component={FighterList} />
    </Route>
    <Route path="heavyweight" component={HeavyWeight} />
    <Route path="lightweight" component={LightWeight} />
    <Route path="welterweight" component={WelterWeight} />
    <Route path="featherweight" component={FeatherWeight} />
              
    </Router>
), document.getElementById('root'))