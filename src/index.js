import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './pages/login';
import MainComponent from './components/MainComponent'

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={MainComponent}></Route>
    </Switch>
</Router>,
document.getElementById('root')
);