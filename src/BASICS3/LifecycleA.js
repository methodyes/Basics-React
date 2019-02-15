import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Metho"
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A  getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate')
    }
   
    
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
        {this.state.name}
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA