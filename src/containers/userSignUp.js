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

  onSignUp(formValues) {
    this.props.userSignUp(formValues, () => {
      this.props.history.push("/signup/success");
    });
  }
  
  render() {
    const { handleSubmit } = this.props;

    console.log("Render:");
    if (this.props.userSignUpResult && this.props.userSignUpResult.status === "pending") {
      return( <div><h1>Signing you up...</h1></div> )
    }

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

function validate(formValues) {
  const errors = {}
  if (!formValues.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address'
  }
  if (!formValues.password) {
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