import React, { Component } from 'react';
import "./pageNotFound.css";
import tv from "./old-tv.png";

export default class PageNotFound extends Component {
  render() {

    return (
      
      <div style={{height:'100%',width:'100%'}} className="page-not-found-container">
        <div className="tv-container">
          <div className="noise-layer"></div>
          <img className="tv-image" src={tv} alt=""/>
          <p className="page-not-found-title">Oops...</p>          
          <p className="page-not-found-text">Page not found</p>
        </div>
      </div>
    )
  }
}