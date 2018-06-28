import React, { Component } from 'react';
import "./pageNotFound.css";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-container">
        <img src="/old-tv.png" alt=""/>
        <p className="page-not-found-text">Oops...Page not found</p>
      </div>
    )
  }
}