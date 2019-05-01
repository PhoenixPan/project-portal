import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesSetting from './particles.json';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Particles height="100%" className="particles-canvas" params={particlesSetting}/>
                <div className="construction-container">
                    <img src={require(`public/resources/website-construction.svg`)} alt="" />
                    <h1>under construction</h1>
                </div>
            </div>
        )
    }
}