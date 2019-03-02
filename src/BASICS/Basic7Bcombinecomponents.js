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
// // Inside Basic7Acombinecomponents

// import React from 'react'
// import Basic7Bcombinecomponents from './Basic7Bcombinecomponents'

// const Basic7Acombinecomponents = () => {
//   return (
//     <div>

//       <Basic7Bcombinecomponents name="Metho" age="30" > Cool </Basic7Bcombinecomponents>
//     </div>
//   )
// }

// export default Basic7Acombinecomponents