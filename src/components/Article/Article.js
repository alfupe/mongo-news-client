import React, { useContext } from 'react';
import { I18nContext } from 'react-i18next';
import { InboxOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Tooltip } from 'antd';
import './article.scss';

const Article = props => {
    const {i18n} = useContext(I18nContext);

    return (
        <article className="article">
            <header className="article__header">
                <div className="article__title">{props.data.title}</div>
                {props.data.author &&
                <div className="article__author"><UserOutlined /> {props.data.author}</div>}
            </header>
            <div className="article__main">
                <div className="article__text">
                    <div className="article__content">{props.data.content}</div>
                    <div className="article__description">{props.data.description}</div>
                </div>
                <aside className="article__actions">
                    {!!props.onArchive &&
                    <Tooltip title={i18n.t('global.archive')}>
                        <Button icon={<InboxOutlined />}
                                shape="circle"
                                onClick={event => props.onArchive(props.data.id)} />
                    </Tooltip>}
                    {!!props.onRemove &&
                    <Popconfirm title="Are you sure delete this task?"
                                onConfirm={event => props.onRemove(props.data.id)}
                                okText={i18n.t('global.yes')}
                                cancelText={i18n.t('global.no')}>
                        <Tooltip title={i18n.t('global.remove')}>
                            <Button icon={<DeleteOutlined />}
                                    shape="circle"
                                    danger />
                        </Tooltip>
                    </Popconfirm>}
                </aside>
            </div>
        </article>
    );
};

export default Article;
