import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PortalSvg from 'public/resources/portal.svg';
import './navbar.scss';

export const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <img className="navbar-brand-img" src={PortalSvg} alt="" />
                <Link className="navbar-brand" to="/">
                    Project Portal
                </Link>
                <button className={`navbar-toggler nav-button ${navbarActive ? "active" : ""}`} type="button" onClick={() => setNavbarActive(!navbarActive)}>
                    <div className="line1 line"></div>
                    <div className="line2 line"></div>
                </button>
                <div className={`navbar-collapse ${navbarActive ? "" : "active"}`}>
                    <Link className="nav-item" to="/signup">
                        Sign up
                    </Link>
                    <Link className="nav-item" to="/demo">
                        Demo
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
