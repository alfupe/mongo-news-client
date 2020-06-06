import React from 'react';
import { Drawer } from 'antd';
import './sidebar.scss';

const Sidebar = props => {
    return (
        <aside className="sidebar">
            <Drawer title={props.title}
                    placement={props.placement}
                    width={620}
                    destroyOnClose={true}
                    visible={props.visible}
                    onClose={props.onClose}>
                <div className="sidebar__contents">
                    {props.children}
                </div>
            </Drawer>
        </aside>
    );
};

Sidebar.defaultProps = {
    title: '',
    placement: 'right',
    visible: false,
    onClose: () => {}
};

export default Sidebar;
