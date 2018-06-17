import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserDesign from '../components/userDesign';


export default class Editor extends Component {
  
    render() { 
      return (
        <div>
          <h1>Editor</h1>
          <label htmlFor="user-design-title">Title: </label>
          <input id="user-design-title" type="text"/>
          <label htmlFor="user-design-body">Body:</label>
          <textarea id="user-design-body" type="text"/>
        </div>
      )
    }
  }
  
  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators(null, dispatch);
  // }
  
  // function mapStateToProps( {allUserDesigns} ) {
  //   return { allUserDesigns };
  // }
  
  // export default connect(mapStateToProps, mapDispatchToProps)(Editor);