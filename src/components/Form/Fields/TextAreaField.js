import React from 'react';
import { Input } from 'antd';
import FieldWrapper from './FieldWrapper';
import { useField } from 'formik';

const TextAreaField = props => {
    const [field, meta] = useField(props);

    return (
        <FieldWrapper {...props} meta={meta}>
            <Input.TextArea {...field} {...props} className="input-field__control" />
        </FieldWrapper>
    );
};
export default TextAreaField;
