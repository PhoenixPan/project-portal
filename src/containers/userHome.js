import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import UserDesign from '../components/userDesign';
import { getAllUserDesigns } from "../actions/getAllUserDesignsActionCreator";

import './userHome.css';


class UserHome extends Component {

  componentDidMount() {
    this.props.getAllUserDesigns();
  }

  render() { 
    var allDesigns = this.props.allUserDesigns;
    console.log(allDesigns); 
    
    if (!allDesigns || allDesigns.length < 1) {
      return <h1>Loading...</h1>
    }

    var designs = [];
    for (const id of Object.keys(allDesigns)) {
      if (id < 10)
        designs.push(<UserDesign key={id} designInfo={allDesigns[id]}/>);
    }

    return (
      <div>
        <div className="user-designs-container">{designs}</div>
        <Link className="btn btn-primary" to="/design">Add a new design</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllUserDesigns }, dispatch);
}

function mapStateToProps( {allUserDesigns} ) {
  return { allUserDesigns };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);