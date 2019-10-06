import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { TextInput } from 'components/form/text-input';
import { emailValidator } from 'components/form/field-validators';

class SignupForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field name="username" type="text" component={TextInput} label="Username" />
                <Field name="email" type="text" component={TextInput} label="Email" validate={emailValidator}/>
                <Field name="password" type="text" component={TextInput} label="Password" />
                <div>
                    <button class="form-submit-btn" type="submit" disabled={pristine || submitting}>
                        Sign Up
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signupForm'
})(SignupForm);
