import React, { Component } from 'react'

class Basic12letclass extends Component {
  render() {
      let name=this.props.name ? this.props.name : " is unknown"
      let age=this.props.age ? this.props.age : " is unknown"
    return (
      <div>
        <h3>
        Name : {name} | Age : {age}
      </h3>
      </div>
    )
  }
}
export default   Basic12letclass

// this is how to use a let funcion in a class component