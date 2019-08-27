import React from 'react';

export const TextInput = ({ input, label, type, meta: { asyncValidating, touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <div className={asyncValidating ? 'async-validating' : ''}>
                <input {...input} type={type} placeholder={label} />
                {/* {touched && error && <span>{error}</span>} */}
            </div>
        </div>
    );
};

export default TextInput;
