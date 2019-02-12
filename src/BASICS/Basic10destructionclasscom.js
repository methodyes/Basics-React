import React, { Component } from 'react'

class Basic10destructionclasscom extends Component {
    
  render() {
    const {name,age} = this.props
    return (
      <div>
        <h1>This is how to make a destruction for class component</h1>
        <h3> Name: {name} | Age : {age} </h3> 
      </div>
    )
  }
}
export default  Basic10destructionclasscom

// note : this is how to destruction for class Component- we have assigned a const for the props.
// but this must do inside the render