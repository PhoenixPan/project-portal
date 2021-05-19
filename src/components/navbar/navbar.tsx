import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">
                    <img src={require(`public/resources/portal.svg`)} alt="" />
                    Project Portal
                </Link>
                <button className={`navbar-toggler nav-button ${navbarActive ? "active" : ""}`} type="button" onClick={() => setNavbarActive(!navbarActive)}>
                    <div className="line1 line"></div>
                    <div className="line2 line"></div>
                </button>
                <div className={`navbar-collapse ${navbarActive ? "" : "active"}`}>
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
