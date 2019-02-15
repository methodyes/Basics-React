import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Metho"
      }
      console.log('Lifecycle A constructor')
    }
   
    
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default LifecycleA