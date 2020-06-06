import React, { useContext } from 'react';
import { withAppLayout } from '../../HOC/WithAppLayout';
import PageContainer from '../../PageContainer/PageContainer';
import { I18nContext } from 'react-i18next';

const ArchivedNews = props => {
    const {i18n} = useContext(I18nContext);

    return (
        <PageContainer title={i18n.t('page.archived.title')}
                       subtitle={i18n.t('page.archived.subtitle')}>
            archived news
        </PageContainer>
    );
};

export default withAppLayout(ArchivedNews);
