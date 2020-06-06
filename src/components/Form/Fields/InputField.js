import React from 'react';
import { useField } from 'formik';
import { Input } from 'antd';
import FieldWrapper from './FieldWrapper';

const InputField = props => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    const renderField = type => {
        return React.createElement(type === 'password' ? Input.Password : Input, {
            className: 'input-field__control',
            ...field,
            ...props
        });
    };

    return (
        <FieldWrapper {...props} meta={meta}>
            {renderField(props.type)}
        </FieldWrapper>
    );
};

InputField.defaultProps = {
    type: 'text'
};

export default InputField;
