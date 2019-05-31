import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../layout/App'
import login from '../pages/login';
import register from '../pages/register';
import movie from '../pages/movie';
const routerCom=()=>(
    <HashRouter>
        <Switch>
            <Route path='/login' component={ login }></Route>
            <Route path='/register' component={ register }></Route>
            <Route path='/movie/:mid' component={ movie }></Route>
            <Route path='/' component={ App }></Route>
        </Switch>
        
    </HashRouter>
)
export default routerCom