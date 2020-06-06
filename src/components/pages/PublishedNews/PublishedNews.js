import React, { useContext, useEffect, useState } from 'react';
import { withAppLayout } from '../../HOC/WithAppLayout';
import { I18nContext } from 'react-i18next';
import PageContainer from '../../PageContainer/PageContainer';
import { Button, Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Sidebar from '../../Sidebar/Sidebar';
import { notification } from 'antd';
import { ServicesContext } from '../../../context/ServicesProvider';
import ArticleForm from '../../ArticleForm/ArticleForm';
import NewsList from '../../NewsList/NewsList';
import NewsSkeleton from '../../NewsSkeleton/NewsSkeleton';

const PublishedNews = props => {
    const {i18n} = useContext(I18nContext);
    const servicesContext = useContext(ServicesContext);
    const [createSidebarIsVisible, setCreateSidebarIsVisible] = useState(false);
    const [articles, setArticles] = useState([]);
    const [fetching, setFetching] = useState(true);

    const createArticle = values => {
        servicesContext.news
            .create(values)
            .then(response => {
                notification.succcess({
                    message: i18n.t('component.notification.title.success'),
                    description: i18n.t('entity.new.message.success_created')
                });
                setCreateSidebarIsVisible(false);
                findAllPublished();
            })
            .catch(error => {
                notification.error({
                    message: i18n.t('component.notification.title.error'),
                    description: error
                });
            });
    };

    const findAllPublished = () => {
        setFetching(true);
        servicesContext.news
            .findAllPublished()
            .then(articles => setArticles(articles))
            .catch(console.error)
            .finally(() => setFetching(false));
    };

    const archive = id => {
        servicesContext.news
            .archive(id)
            .then(response => {
                notification.success({
                    message: i18n.t('component.notification.title.success'),
                    description: i18n.t('entity.new.message.success_archived')
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

    const renderCreateButton = () => {
        return (
            <Button key="create"
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={event => setCreateSidebarIsVisible(true)}>
                {i18n.t('global.new')}
            </Button>
        );
    };

    return (
        <PageContainer title={i18n.t('page.published.title')}
                       subtitle={i18n.t('page.published.subtitle')}
                       extra={[renderCreateButton()]}>
            <NewsSkeleton fetching={fetching}>
                {articles.length
                    ? <NewsList articles={articles}
                                onArchive={archive}
                    />
                    : <Empty description={i18n.t('entity.new.no_content_title', {status: i18n.t('entity.new.status.published', {count: 0})})}>
                        {renderCreateButton()}
                    </Empty>
                }
            </NewsSkeleton>
            <Sidebar visible={createSidebarIsVisible}
                     title={i18n.t('entity.new.create_title')}
                     onClose={event => setCreateSidebarIsVisible(false)}>
                <ArticleForm onSubmit={createArticle} />
            </Sidebar>
        </PageContainer>
    );
};

export default withAppLayout(PublishedNews);
