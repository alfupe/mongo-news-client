import React, { useContext, useEffect, useState } from 'react';
import { withAppLayout } from '../../HOC/WithAppLayout';
import PageContainer from '../../PageContainer/PageContainer';
import { I18nContext } from 'react-i18next';
import NewsList from '../../NewsList/NewsList';
import { ServicesContext } from '../../../context/ServicesProvider';
import { notification } from 'antd';

const ArchivedNews = props => {
    const {i18n} = useContext(I18nContext);
    const servicesContext = useContext(ServicesContext);
    const [articles, setArticles] = useState([]);

    const findAllPublished = () => {
        servicesContext.news
            .findAllArchived()
            .then(articles => setArticles(articles));
    };

    const remove = id => {
        servicesContext.news
            .remove(id)
            .then(response => {
                notification.success({
                    message: i18n.t('component.notification.title.success'),
                    description: i18n.t('entity.new.message.success_removed')
                });
                findAllPublished();
            })
            .catch(error => {
                notification.error({
                    message: i18n.t('component.notification.title.error'),
                    description: error
                });
            });
    };

    useEffect(findAllPublished, []);

    return (
        <PageContainer title={i18n.t('page.archived.title')}
                       subtitle={i18n.t('page.archived.subtitle')}>
            <NewsList articles={articles}
                      onRemove={remove}
            />
        </PageContainer>
    );
};

export default withAppLayout(ArchivedNews);
