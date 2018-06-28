import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from "../actions/userLoginActionCreator";
import { fakeAuth } from "../constants/fakeAuth";

import "./userLogin.css";

class UserLogin extends Component { 

  state = {
    redirectToReferrer: false
  }

  onLogin(formValues) {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
    // this.props.history.push("/");
    // this.props.loginUser(formValues, () => {
    //   this.props.history.push("/");
    // });
  }

  renderLoginField({input, label, type, meta: { touched, error }}) {

    const inputClassName = `${ touched && error ? "input-error form-control" : "form-control"}`;

    return(
      <div>
        <label>{label}</label><br/>
        <input className={inputClassName} {...input} type={type}/>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer)
      return <Redirect to={from} />

    const { handleSubmit } = this.props;

    return (
      <div className="login-container">      
        <span className="login-logo"></span>
        <form onSubmit={handleSubmit(this.onLogin.bind(this))}> 
          <h1 className="login-header">Login</h1>
          <Field label="Email:" name="email" component={this.renderLoginField} type="text" />
          <Field label="Password:" name="password" component={this.renderLoginField} type="password" />
          <button className="btn login-submit" type="submit">Login</button>
        </form>
      </div>
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

function mapStateToProps( { userLoginResult } ) {
  return { userLoginResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default reduxForm({ 
  validate: validate,
  form: 'UserLoginForm' 
})(
  connect(mapStateToProps, mapDispatchToProps)(UserLogin)
);