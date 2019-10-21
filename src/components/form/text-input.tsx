import React from 'react';

interface IProps {
    input: string;
    label: string;
    type: string;

    meta: {
        asyncValidating: boolean;
        touched: boolean;
        error: object;
    };
}

export const TextInput: React.FC<IProps> = props => {
    const {
        input,
        label,
        type,
        meta: { asyncValidating, touched, error }
    } = props;
    return (
        <div>
            <label>{label}</label>
            <div className={asyncValidating ? 'async-validating' : ''}>
                <input {...input} type={type} placeholder={label} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    );
};

export default TextInput;
