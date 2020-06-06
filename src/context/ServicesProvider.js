import React from 'react';
import NewsService from '../services/NewsService';

export const ServicesContext = React.createContext({});

const ServicesProvider = props => {
    const services = {
        news: new NewsService()
    };

    return (
        <ServicesContext.Provider value={{...services}}>
            {props.children}
        </ServicesContext.Provider>
    );
};

export default ServicesProvider;
