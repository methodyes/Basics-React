import React, { Component } from 'react'

export default class Countage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          title : "my todo app",
          inputdata : '',
      }
    }
    clickTo(type){
     this.setState ({
         inputdata : type.target.value
     })
    }
    
  render() {
    return (
        
      <div style={{backgroundColor :'#FF00FF'}}>
          
          <h1>{this.state.title}</h1>
        <input
        onChange={this.clickTo.bind(this)}
        type="text"
        placeholder="type here "
        value={this.state.inputdata}
        />
        <button>Add task</button>
      </div>
      
    )
  }
}
