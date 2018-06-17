import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class UserLogin extends Component { 

  renderLoginField({input, label, type, meta: { touched, error }}) {

    const inputClassName = `${ touched && error ? "input-error" : ""}`;

    return(
      <div>
        <label>{label}</label><br/>
        <input className={inputClassName} {...input} type={type}/>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    );
  }

  onLogin(values) {
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onLogin.bind(this))}> 
        <h1>Login</h1>
        <Field label="Email:" name="email" component={this.renderLoginField} type="text" />
        <Field label="Password:" name="password" component={this.renderLoginField} type="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

export default reduxForm({ 
  validate: validate,
  form: 'UserLoginForm' 
})(UserLogin);