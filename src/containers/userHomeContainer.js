import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import UserHome from '../components/userHome';
import { getAllUserDesigns } from "../actions/getAllUserDesignsActionCreator";
import { fakeAuth } from "../components/fakeAuth";

class UserHomeContainer extends Component {

  componentDidMount() {
    this.props.getAllUserDesigns();
  }

  render() { 

    if (!fakeAuth.isAuthenticated)
      return <h1>Please login first</h1>
      // return <UserLogin />

    return (
      <UserHome allUserDesigns={this.props.allUserDesigns}/>
    )
  }
}

UserHomeContainer.propTypes = {
  allUserDesigns: PropTypes.object
}

function mapStateToProps( {allUserDesigns, userLoginResult} ) {
  return { allUserDesigns, userLoginResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllUserDesigns }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeContainer);