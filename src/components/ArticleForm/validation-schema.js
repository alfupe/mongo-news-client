import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .required('Requerido'),
    content: Yup.string()
        .required('Requerido'),
    author: Yup.string()
        .required('Requerido'),
    description: Yup.string()
        .required('Requerido')
});

export default validationSchema;
