import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="construction-container">
                    <img src={require(`public/resources/website-construction.svg`)} alt="" />
                    <h1>under construction</h1>
                </div>
            </div>
        )
    }
}

export default Home;