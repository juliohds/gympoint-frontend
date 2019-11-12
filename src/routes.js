import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
// import Main from './pages/main';
import Repository from './pages/repository';
import Login from './pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
