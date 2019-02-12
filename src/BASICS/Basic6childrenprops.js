import React, { Component } from 'react'

 class Basic6childrenprops extends Component {
  render() {
    return (
      <div>
        <h1> Learn About Children Props</h1>
        <h3>
            Name : {this.props.name} | Age : {this.props.age} , {this.props.children}
        </h3>
      </div>
    )
  }
}
export default Basic6childrenprops