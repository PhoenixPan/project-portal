import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { TextInput } from 'components/form/text-input';
import { emailValidator } from 'components/form/field-validators';

interface IProps {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
}

export const SignupForm: React.FC<IProps> = props => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={TextInput} label="Username" />
            <Field name="email" type="text" component={TextInput} label="Email" validate={emailValidator} />
            <Field name="password" type="text" component={TextInput} label="Password" />
            <div>
                <button className="form-submit-btn" type="submit" disabled={pristine || submitting}>
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'signupForm'
})(SignupForm);
