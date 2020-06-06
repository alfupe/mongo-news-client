import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Router } from 'wouter';
import ServicesProvider from './context/ServicesProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <ServicesProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </ServicesProvider>
        </I18nextProvider>
    );
}

export default App;
