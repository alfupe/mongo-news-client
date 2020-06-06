import React, { useContext } from 'react';
import { I18nContext } from 'react-i18next';
import { InboxOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import dayjs from 'dayjs';
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
                    <Popconfirm title={i18n.t('entity.new.confirm.archive')}
                                placement="topRight"
                                onConfirm={event => props.onArchive(props.data.id)}
                                okText={i18n.t('global.yes')}
                                cancelText={i18n.t('global.no')}>
                        <Button icon={<InboxOutlined />}
                                shape="circle"
                        />
                    </Popconfirm>}
                    {!!props.onRemove &&
                    <Popconfirm title={i18n.t('entity.new.confirm.remove')}
                                placement="topRight"
                                onConfirm={event => props.onRemove(props.data.id)}
                                okText={i18n.t('global.yes')}
                                cancelText={i18n.t('global.no')}>
                            <Button icon={<DeleteOutlined />}
                                    shape="circle"
                                    danger
                            />
                    </Popconfirm>}
                </aside>
            </div>
            <footer className="article__meta">
                {props.data.date &&
                <div className="article__date">
                    creación: {dayjs(props.data.date).format('DD/MM/YYYY HH:mm:ss')}
                </div>}
                {props.data.archiveDate &&
                <div className="article__date">
                    archivo: {dayjs(props.data.archiveDate).format('DD/MM/YYYY HH:mm:ss')}
                </div>}
            </footer>
        </article>
    );
};

export default Article;
