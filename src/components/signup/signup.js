import React, { Component } from 'react';
import SignupForm from './signup-form';

export default class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                <SignupForm/>
            </div>
        )
    }
}