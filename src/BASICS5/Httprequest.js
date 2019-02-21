import React, { Component } from 'react'
import axios from 'axios'

 class Httprequest extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          title : "Email List",
          details : [],
          error :'',
       }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
         .then(response=>{
        //    console.log(response)
        this.setState({
            details : response.data
        })

         })
         .catch(error=>{
             this.setState({
                error:"Error of receiving data"
             })
         })
     }
     
  render() {
      var {title,details,error} = this.state
    return (
      <div>
        <h1>{title}</h1>
        {details.map(detail=>{
            return (
                <h3>{detail.email}</h3>
            )
        })}
        <div>{error}</div>
      </div>
    )
  }
}

export default Httprequest
