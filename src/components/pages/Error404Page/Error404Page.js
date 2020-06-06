import React, { useContext } from 'react';
import { Link } from 'wouter';
import { I18nContext } from 'react-i18next';
import './error-page.scss';

const Error404Page = props => {
    const {i18n} = useContext(I18nContext);

    return (
        <div className="error-page">
            <section className="error-box">
                <header className="error-box__header">
                    <h1 className="error-box__title">
                        {i18n.t('page.error_404.title')}
                    </h1>
                </header>
                <div className="error-box__content">
                    {i18n.t('page.error_404.content')}
                </div>
                <footer className="error-box__footer">
                    <Link to="/">
                        {i18n.t('page.error_404.action.back_to_home')}
                    </Link>
                </footer>
            </section>
        </div>
    );
};

export default Error404Page;
