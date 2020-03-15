import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './../components/lib/Layout/AppRoute';
import UserPage from './UserPage';
import UserCart from './UserCart';
import UserFavorites from './UserFavorites';

export default Routes

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <AppRoute exact path='/' component={UserPage} />
                <AppRoute exact path='/cart' component={UserCart} />
                <AppRoute exact path='/favorite' component={UserFavorites} />
            </Switch>
        </BrowserRouter>
    )
}