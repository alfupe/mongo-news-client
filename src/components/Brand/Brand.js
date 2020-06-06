import React from 'react';
import { useLocation } from 'wouter';
import brand from './mongoNewsLogo.svg';
import './brand.scss';

const Brand = props => {
    const [location, setLocation] = useLocation();

    return (
        <div className="brand"
             onClick={event => setLocation("/")}>
            <img src={brand} alt="Mongo News"/>
        </div>
    );
};

export default Brand;
