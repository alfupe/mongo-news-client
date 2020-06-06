import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import Error404Page from '../components/pages/Error404Page/Error404Page';
import PublishedNews from '../components/pages/PublishedNews/PublishedNews';
import ArchivedNews from '../components/pages/ArchivedNews/ArchivedNews';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={params => (<Redirect to="/news"/>)} />
            <Route path="/news" component={PublishedNews} />
            <Route path="/archived" component={ArchivedNews} />
            <Route path="/:rest*" component={Error404Page} />
        </Switch>
    );
};

export default AppRoutes;
