import React from 'react';
import SignupForm from './signup-form';
import { ParticleEffect } from 'components/particle-effect/particle-effect';

export const Signup = () => {
    return (
        <div>
            <ParticleEffect />
            <div className="signup-container">
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;
