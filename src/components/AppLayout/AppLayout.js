import React from 'react';
import { Layout } from 'antd';
import MainMenu from '../MainMenu/MainMenu';
import './app-layout.scss';

const AppLayout = props => (
    <Layout className="app-layout">
        <Layout.Header className="app-layout__header">
            <MainMenu />
        </Layout.Header>
        <Layout.Content className="app-layout__content">
            {props.children}
        </Layout.Content>
    </Layout>
);

export default AppLayout;
