import React, { Component } from 'react'

export default class Basic7Bcombinecomponents extends Component {
  render() {
    return (
      <div>
        <h1> Learn how to combine components</h1>
        <h3>
            Name : {this.props.name} | Age : {this.props.age} , {this.props.children}
        </h3>
      </div>
    )
  }
}
// this is the sub compoent. see how the details are mentioned. here.