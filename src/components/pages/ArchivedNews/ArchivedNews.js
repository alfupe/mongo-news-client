import React, { useContext, useEffect, useState } from 'react';
import { withAppLayout } from '../../HOC/WithAppLayout';
import PageContainer from '../../PageContainer/PageContainer';
import { I18nContext } from 'react-i18next';
import NewsList from '../../NewsList/NewsList';
import { ServicesContext } from '../../../context/ServicesProvider';
import { Empty, notification } from 'antd';
import NewsSkeleton from '../../NewsSkeleton/NewsSkeleton';

const ArchivedNews = props => {
    const {i18n} = useContext(I18nContext);
    const servicesContext = useContext(ServicesContext);
    const [articles, setArticles] = useState([]);
    const [fetching, setFetching] = useState(true);

    const findAllPublished = () => {
        setFetching(true);
        servicesContext.news
            .findAllArchived()
            .then(articles => setArticles(articles))
            .catch(console.error)
            .finally(() => setFetching(false));
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
            <NewsSkeleton fetching={fetching}>
                {articles.length
                    ? <NewsList articles={articles}
                                onRemove={remove}
                    />
                    : <Empty description={i18n.t('entity.new.no_content_title', {status: i18n.t('entity.new.status.archived', {count: 0})})} />
                }
            </NewsSkeleton>
        </PageContainer>
    );
};

export default withAppLayout(ArchivedNews);
