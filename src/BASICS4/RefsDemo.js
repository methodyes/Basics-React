import React, { Component } from 'react'

 class RefsDemo extends Component {
  render() {
    return (
      <div>
        <input
        text="text"
        />
      </div>
    )
  }
}

export default RefsDemo

/* Concept of reps -
Basically refs make it possible to access dom nodes directly within react
there are two use cases of refs
1. point a cursor in the input box
2. to fetch the input value

*/