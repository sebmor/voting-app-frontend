import React from 'react';

export const required = value => (value ? undefined : 'Required');

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength100 = maxLength(100);

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minLength6 = minLength(6);

export const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9']/i.test(value)
        ? 'Only alphanumeric, single quote characters'
        : undefined;

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
    }) =>
    <div className="form-group">
        <label>{label}</label>
        <input {...input} className="form-control" placeholder={label} type={type} />
        {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
    </div>;

