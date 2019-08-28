import React, { Component } from 'react';
import { ParticleEffect } from 'components/particle-effect/particle-effect';

class Home extends Component {
    render() {
        return (
            <div>
                <ParticleEffect />
                <div className="home-container">
                    <div className="construction-container">
                        <img src={require(`public/resources/website-construction.svg`)} alt="" />
                        <h1>under construction</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
