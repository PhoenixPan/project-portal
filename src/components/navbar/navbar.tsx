import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
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
                    <Link className="nav-link" to="/demo">
                        Demo
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
