import React, { Component } from 'react'

 class Basic11buttoncount extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count : 1
       }
  this.increasevalue = this.increasevalue.bind(this)
  this.decreasevalue=this.decreasevalue.bind(this)
  this.multiply=this.multiply.bind(this)
  this.division = this.division.bind(this)
     }
     increasevalue () {
         this.setState ({
             count : this.state.count + 1
         })
     }
     decreasevalue () {
        this.setState ({
            count : this.state.count - 1
        })
    }
    multiply () {
        this.setState ({
            count : this.state.count * 2
        })
    }
    division () {
        this.setState ({
            count : this.state.count / 2
        })
    }
  render() {
    return (
      <div>
        <h1>This is how to change the value by a button</h1>
        <button onClick={this.increasevalue}> +1 </button> 
        <button onClick={this.decreasevalue}> -1 </button>
        <button onClick={this.multiply}> *2 </button>
        <button onClick={this.division}> /2 </button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
export default Basic11buttoncount

// note : this is how to add a button to change the value here- we have used binding method here.

// INSIDE APP .JS

     {/* <Basic11buttoncount1/> */}