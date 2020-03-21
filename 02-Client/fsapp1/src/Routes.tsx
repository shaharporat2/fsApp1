import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import  { Signup }  from '../src/components/signup/signup'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact></Route>
                <Route path="/signup" component={Signup} exact></Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;