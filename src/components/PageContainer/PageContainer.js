import { PageHeader } from 'antd';
import React from 'react';
import './page-container.scss';

const PageContainer = props => {
    return (
        <section className="page-container">
            <div className="page-container__header">
                <PageHeader title={props.title}
                            ghost={false}
                            subTitle={props.subtitle}
                            extra={props.extra}
                />
            </div>
            <div className="page-container__content">
                {props.children}
            </div>
        </section>
    );
};

PageContainer.defaultProps = {
    title: '',
    subtitle: '',
    extra: []
};

export default PageContainer;
