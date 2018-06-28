import React, { Component } from 'react';

import UserDesignCard from '../components/userDesignCard';
import './userHome.css';


export default class UserHome extends Component {

  render() { 
    var allUserDesigns = this.props.allUserDesigns;
    
    if (!allUserDesigns) {
      return <h1>Loading...</h1>
    }

    if (allUserDesigns.length < 1) {
      return <h1>Oops...it seems your vault is empty, let's get something!</h1>
    }

    var designs = [];
    for (const id of Object.keys(allUserDesigns)) {
      if (id < 10)
        designs.push(<UserDesignCard key={id} designInfo={allUserDesigns[id]}/>);
    }

    return (
      <div>
        <div className="user-designs-container">{designs}</div>
      </div>
    )
  }
}
