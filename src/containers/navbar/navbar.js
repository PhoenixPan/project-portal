import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fakeAuth } from '../../constants/fakeAuth';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Test</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/designs/new">Add a new design</Link>
              { !fakeAuth.isAuthenticated && <Link className="nav-item nav-link" to="/signup">Sign up</Link> }
              { !fakeAuth.isAuthenticated &&  <Link className="nav-item nav-link" to="/login">Login</Link> }
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/also/will/not/match">Not Match</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}