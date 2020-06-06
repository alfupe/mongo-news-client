import { Menu } from 'antd';
import React, { Fragment, useContext } from 'react';
import { useLocation } from 'wouter';
import { FileTextOutlined, InboxOutlined } from '@ant-design/icons';
import Brand from '../Brand/Brand';
import { I18nContext } from 'react-i18next';
import './main-menu.scss';

const MainMenu = props => {
    const {i18n} = useContext(I18nContext);
    const [location, setLocation] = useLocation();

    return (
        <Fragment>
            <Brand />
            <Menu theme="dark"
                  className="main-menu"
                  defaultSelectedKeys={[location]}
                  onClick={event => setLocation(event.key)}>
                <Menu.Item key="/news" icon={<FileTextOutlined />}>
                    {i18n.t('page.published.menu')}
                </Menu.Item>
                <Menu.Item key="/archived" icon={<InboxOutlined />}>
                    {i18n.t('page.archived.menu')}
                </Menu.Item>
            </Menu>
        </Fragment>
    );
};

export default MainMenu;
