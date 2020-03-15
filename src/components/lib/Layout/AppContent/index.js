import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout

export default AppContent;

function AppContent({
                    children
                    }){
    return (
        <Content>
            {children}
        </Content>
    )
}