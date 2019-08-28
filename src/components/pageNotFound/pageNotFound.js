import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import tv from './old-tv.png';

class PageNotFound extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch(push('/'));
        }, 5000);
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }} className="page-not-found-container">
                <div className="tv-container">
                    <div className="noise-layer"></div>
                    <img className="tv-image" src={tv} alt="" />
                    <p className="page-not-found-title">Oops...</p>
                    <p className="page-not-found-text">Page not found</p>
                </div>
            </div>
        );
    }
}

export default connect()(PageNotFound);
