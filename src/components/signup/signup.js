import React, { Component } from 'react';
import SignupForm from './signup-form';
import { ParticleEffect } from 'components/particle-effect/particle-effect';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <ParticleEffect />
                <div className="signup-container">
                    <SignupForm />
                </div>
            </div>
        );
    }
}
