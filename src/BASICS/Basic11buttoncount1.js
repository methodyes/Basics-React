import React, { Component } from 'react'

 class Basic11buttoncount1 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          title : "Change the value",
          count : 0,
       }
     }
     increase (){
         this.setState(prevState=>({
             count : this.state.count + 1
         }))
     }
     decrease(){
         if(this.state.count===0){
             this.setState ({
                 count : 0
             })
         } else {
             this.setState (prevState=>({
                 count:this.state.count-1
             }))
         }
     }
     
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>

        <button onClick={this.increase.bind(this)}>+</button>
        <input value={this.state.count}/>
        <button onClick={this.decrease.bind(this)}>-</button>
      </div>
    )
  }
}

export default Basic11buttoncount1

// INSIDE APP .JS

      {/* <Basic11buttoncount1/> */}