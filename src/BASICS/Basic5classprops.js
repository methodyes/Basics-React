import React, { Component } from 'react'

 class Basic5classprops extends Component {
  render() {
    return (
      <div>
        <h1>Learn about class props</h1>
        <h3>
            Name : {this.props.name} | Age : {this.props.age}
        </h3>
      </div>
    )
  }
}
export default Basic5classprops