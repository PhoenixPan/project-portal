import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesSetting from './particles.json';
class Home extends Component {
    render() {
        return (
            <div>
                <Particles height="100%" className="particles-canvas" params={particlesSetting}/>
                <div className="home-container">
                    <div className="construction-container">
                        <img src={require(`public/resources/website-construction.svg`)} alt="" />
                        <h1>under construction</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;