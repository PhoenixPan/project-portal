import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignUp } from "../actions/userSignUpActionCreator";

class UserSignUp extends Component { 

  renderSignUpField({input, label, type, meta: { touched, error }}) {

    const inputClassName = `${ touched && error ? "input-error" : ""}`;

    return(
      <div>
        <label>{label}</label><br/>
        <input className={inputClassName} {...input} type={type}/>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    );
  }

  onSignUp(values) {
    console.log("signup start");
    this.props.userSignUp(values);
    console.log("signup over");
    // this.props.history.push("/signup/success");
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSignUp.bind(this))}> 
          <h1>Sign up</h1>
          <Field label="Email:" name="email" component={this.renderSignUpField} type="text" />
          <Field label="Password:" name="password" component={this.renderSignUpField} type="password" />
          <button type="submit">Sign up</button>
        </form>
        <Link className="btn btn-primary" to="/">Back to home page</Link>  
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

function mapStateToProps( { userSignUpResult } ) {
  return { userSignUpResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userSignUp }, dispatch);
}

export default reduxForm({ 
  validate: validate,
  form: 'UserSignUpForm' 
})(
  connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
);