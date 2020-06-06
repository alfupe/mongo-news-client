import React from 'react';
import Article from '../Article/Article';
import './news-list.scss';

const NewsList = props => (
    <section className="news-list">
        {props.articles.map(article => (
            <Article key={article.id}
                     data={article}
                     {...props}
            />
        ))}
    </section>
);

export default NewsList;
