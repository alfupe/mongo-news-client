import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en';
import es from './languages/es';
import getLanguage from '../modules/get-language/get-language';

i18n
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            }
        },
        lng: getLanguage(),
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
