import React from 'react';
import { Layout } from 'antd';
import { AppHeader, AppContent } from './../';
import { ThemeContext, themes } from './../../../../containers/AppStyle';

export default MainLayout;

function MainLayout({
                    children
                    }){
    const theme = themes.default;                    
    const brand = {url: '/', logo: 'logo192.png'};
    const links = [
        {url: '/', title: 'home'},
        {url: '/cart', title: 'cart'},
        {url: '/favorite', title: 'favorite'},
    ];
                
                
    return(
        <Layout>
            <ThemeContext.Provider value={theme.links} >
                <AppHeader brand={brand} links={links} />
            </ThemeContext.Provider>
            <AppContent>
                {children || <span>no content</span>}
            </AppContent>
        </Layout>
    )
}
