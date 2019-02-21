import React, { Component } from 'react'
import axios from 'axios'

 class Httprequest extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          title : "Email List",
          details : []
       }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
     }
     
  render() {
      var {title} = this.state
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

export default Httprequest
