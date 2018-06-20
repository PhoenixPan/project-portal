import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class userSignUpSuccess extends Component { 

  render() {
    return (
      <div>
        <h1>Sign up successfully!</h1>
        <Link className="btn btn-primary" to="/">Go to home page</Link>  
      </div>
    );
  }
}
