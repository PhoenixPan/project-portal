import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from "../actions/userLoginActionCreator";
import { fakeAuth } from "../components/fakeAuth";

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

    const inputClassName = `${ touched && error ? "input-error" : ""}`;

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
      <div>      
        <form onSubmit={handleSubmit(this.onLogin.bind(this))}> 
          <h1>Login</h1>
          <Field label="Email:" name="email" component={this.renderLoginField} type="text" />
          <Field label="Password:" name="password" component={this.renderLoginField} type="password" />
          <button type="submit">Login</button>
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