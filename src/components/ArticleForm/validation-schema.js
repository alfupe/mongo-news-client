import * as Yup from 'yup';

const validationSchema = i18n => {
    return Yup.object({
        title: Yup.string().required(i18n.t('global.required')),
        content: Yup.string().required(i18n.t('global.required')),
        author: Yup.string().required(i18n.t('global.required')),
        description: Yup.string().required(i18n.t('global.required'))
    });
};

export default validationSchema;
