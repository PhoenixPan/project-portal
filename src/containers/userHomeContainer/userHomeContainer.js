import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import UserHome from '../../components/userHome/userHome';
import { getAllUserDesigns } from "../../actions/getAllUserDesignsActionCreator";
import { fakeAuth } from "../../constants/fakeAuth";

class UserHomeContainer extends Component {

  componentDidMount() {
    this.props.getAllUserDesigns();
  }

  render() { 

    if (!fakeAuth.isAuthenticated)
      return <Redirect to="/login" />

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