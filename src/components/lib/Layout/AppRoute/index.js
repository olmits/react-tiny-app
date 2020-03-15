import React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from './../';

export default AppRoute;

function AppRoute({
                    render,
                    component,
                    ...routeProps
                }){
    function renderRouteLayut(){
        return (
            <MainLayout>
                {render ? render() : React.createElement(component)}
            </MainLayout>
        )
    }
    return (
        <Route 
            {...routeProps}
            render={() => renderRouteLayut()}
        />
    )
}