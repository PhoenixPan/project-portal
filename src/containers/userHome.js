import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserDesign from '../components/userDesign';
import { getAllUserDesigns } from "../actions/getAllUserDesignsActionCreator";


class UserHome extends Component {
  constructor(props) {
    super(props);
    this.props.getAllUserDesigns();
  }


  render() { 
    console.log(this.props.allUserDesigns); 

    if (!this.props.allUserDesigns || this.props.allUserDesigns < 1) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        {this.props.allUserDesigns.map((designInfo, index) => {
          if (index < 10) {
            return <UserDesign key={designInfo.id} designInfo={designInfo}/>;
          }
        })}
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