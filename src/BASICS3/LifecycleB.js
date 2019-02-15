import React, { Component } from 'react'


class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Metho"
      }
      console.log('Lifecycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B  getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
   
    
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
       Child component
      </div>
    )
  }
}

export default LifecycleB