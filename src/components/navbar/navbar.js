import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link className="navbar-brand" to="/">
                        <img src={require(`public/resources/portal.svg`)} alt="" />
                        Project Portal
                    </Link>
                    <div className="navbar-collapse">
                        <Link className="nav-link" to="/signup">
                            Sign up
                        </Link>
                        <Link className="nav-link" to="/error">
                            404
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}
