import React, { useContext } from 'react';
import { withAppLayout } from '../../HOC/WithAppLayout';
import { I18nContext } from 'react-i18next';
import PageContainer from '../../PageContainer/PageContainer';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const PublishedNews = props => {
    const {i18n} = useContext(I18nContext);

    return (
        <PageContainer title={i18n.t('page.published.title')}
                       subtitle={i18n.t('page.published.subtitle')}
                       extra={[
                           <Button key="create"
                                   type="primary"
                                   icon={<PlusOutlined />}>
                               {i18n.t('global.new')}
                           </Button>
                       ]}
        >
            published news
        </PageContainer>
    );
};

export default withAppLayout(PublishedNews);
