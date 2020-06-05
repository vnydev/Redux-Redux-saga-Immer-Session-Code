import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './container/home';
import Users from './components/users';
import Profile from './components/profile';
import TopNavComponent from './container/topNav';
import Product from './container/product';
import AddProduct from './container/addProduct';

export const Routes = (
    <Router>
        <TopNavComponent /> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/add-product" component={AddProduct} />
        </Switch>
    </Router>
)
