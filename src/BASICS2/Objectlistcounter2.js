import React, { Component } from 'react'

 class Objectlistcounter2 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Fruits : [
              {name:"apple", price : 20},
              {name:"mango", price : 25},
              {name:"banana", price : 80},
          ],
          title : "Increase price of fruits by 5 "
       }
     }
     increaseprice =()=>{
      const ftuitList = this.state.Fruits.map((fruit)=>{
          fruit.price= fruit.price+5
          return fruit
      })
      this.setState ({
        ftuitList
    
      })
    } 

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.increaseprice}>Click to increase price </button>   
        {this.state.Fruits.map((fruit)=>{
            return(
                <h3>
                    {fruit.name} new price is {fruit.price}
                </h3>
            )
        })}
       
   </div>
    )
  }
}
export default Objectlistcounter2
