import React from 'react';
import './input-field.scss';

const FieldWrapper = props => {
    const getFieldClassName = meta => {
        const classNames = ['input-field'];

        if (meta.touched && meta.error) classNames.push('input-field--has-error');

        return classNames.join(' ');
    };

    return (
        <div className={getFieldClassName(props.meta)}>
            <label className="input-field__label"
                   htmlFor={props.id || props.name}>
                {props.label}
            </label>
            {props.children}
            {props.meta.touched && props.meta.error &&
            <div className="input-field__error">{props.meta.error}</div>}
        </div>
    );
};

export default FieldWrapper;
