import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import UserHome from '../components/userHome';
import { getAllUserDesigns } from "../actions/getAllUserDesignsActionCreator";

class UserHomeContainer extends Component {

  componentDidMount() {
    this.props.getAllUserDesigns();
  }

  render() { 
    return (
      <UserHome allUserDesigns={this.props.allUserDesigns}/>
    )
  }
}

UserHomeContainer.propTypes = {
  allUserDesigns: PropTypes.object
}

function mapStateToProps( {allUserDesigns} ) {
  return { allUserDesigns };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllUserDesigns }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeContainer);