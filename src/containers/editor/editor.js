import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Field, reduxForm } from 'redux-form'

// import UserDesign from '../components/userDesignCard';


export default class Editor extends Component {
  
    render() { 
      return (
        <div>
          <h1>Editor</h1>
          <div>
            <label htmlFor="user-design-title">Title: </label><br/>
            <input id="user-design-title" type="text"/>
          </div>
          <div>
            <label htmlFor="user-design-body">Body:</label><br/>
            <textarea id="user-design-body" type="text"/>
          </div>
          <Link className="btn btn-primary" to="/">Back to home page</Link>  
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