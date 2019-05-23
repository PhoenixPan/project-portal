import React, { Component } from 'react';
import RegistrationForm from './registration-form';

export default class Registration extends Component {
    render() {
        return (
            <div className="registration-container">
                <RegistrationForm/>
            </div>
        )
    }
}