import React from 'react';
import AppLayout from '../AppLayout/AppLayout';

export const withAppLayout = Component => props => (
    <AppLayout {...props}>
        <Component {...props} />
    </AppLayout>
);
