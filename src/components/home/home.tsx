import React from 'react';
import { ParticleEffect } from 'components/particle-effect/particle-effect';

export const Home = () => {
    return (
        <div>
            <ParticleEffect />
            <div className="home-container">
                <div className="construction-container">
                    <img src={require(`public/resources/website-construction.svg`)} alt="" />
                    <h1>Under construction</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
