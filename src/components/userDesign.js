import React, { Component } from 'react';

export default class UserDesign extends Component {
  render() {
    return (
      <div className="user-design">
        <p className="user-design-title">{this.props.designInfo.id}.{this.props.designInfo.title}</p>
        <p className="user-design-body">{this.props.designInfo.body}</p>
      </div>
    )
  }
}