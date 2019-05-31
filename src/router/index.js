import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../layout/App'
const routerCom=()=>(
    <HashRouter>
        <Switch>
            <Route path='/' component={ App }></Route>
        </Switch>
        
    </HashRouter>
)
export default routerCom