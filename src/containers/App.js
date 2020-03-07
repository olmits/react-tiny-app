import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from './UserPage';
import UserCart from './UserCart';
import UserFavorites from './UserFavorites';
import HeaderNavBar from './../components/HeaderNavbar';

import { ThemeContext, themes } from './AppStyle';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: themes.default
        }
    }
    
    render(){
        const brand = {url: '/', logo: 'logo192.png'}
        const links = [
            {url: '/', title: 'home'},
            {url: '/cart', title: 'cart'},
            {url: '/favorite', title: 'favorite'},
        ]

        return(
            <main>
                <ThemeContext.Provider value={this.state.theme.links} >
                    <HeaderNavBar brand = {brand} links = {links} />
                </ThemeContext.Provider>
                <Switch>
                    <Route exact path='/' component={UserPage} />
                    <Route exact path='/cart' component={UserCart} />
                    <Route exact path='/favorite' component={UserFavorites} />
                </Switch>
            </main>
        )
    }
}

export default App;
