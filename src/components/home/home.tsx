import React from 'react';
import { ParticleEffect } from 'components/particle-effect/particle-effect';
import ConstructionImage from 'public/resources/website-construction.svg';

export const Home = () => {
    return (
        <div>
            <ParticleEffect />
            <div className="home-container">
                <div className="construction-container">
                    <img src={ConstructionImage} alt="" />
                    <h1>Under construction</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
