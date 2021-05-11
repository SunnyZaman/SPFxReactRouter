
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
    );
}
export default Router;