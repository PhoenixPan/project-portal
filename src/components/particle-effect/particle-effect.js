import React from 'react';
import Particles from 'react-particles-js';
import particlesSetting from './particles.json';

export const ParticleEffect = () => {
    return <Particles height="100%" className="particles-canvas" params={particlesSetting} />;
};
