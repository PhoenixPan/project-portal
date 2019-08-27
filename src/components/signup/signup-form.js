import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

import { TextInput } from 'components/form/text-input';

class SignupForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
          
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    type="text"
                    component={TextInput}
                    label="Username"
                />
                <Field
                    name="password"
                    type="password"
                    component={TextInput}
                    label="Password"
                />
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signupForm'
})(SignupForm);