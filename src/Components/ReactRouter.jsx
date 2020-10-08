import React from 'react';
import { Switch, Route, BrowserRouter as Router,} from 'react-router-dom';
import HomeBase from './Home/HomeBase/HomeBase';

export default function ReactRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <HomeBase/>
                </Route>
            </Switch>
        </Router>
    )
}