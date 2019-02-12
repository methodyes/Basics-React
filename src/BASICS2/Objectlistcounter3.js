import React, { Component } from 'react'

// 1. create a class component with construction
 class Objectlistcounter3 extends Component {
     constructor(props) {
       super(props)
    //  2. create an object array
       this.state = {
          Fruits : [
              {name:"apple", price : 20},
              {name:"mango", price : 25},
              {name:"banana", price : 80},
          ],
        //   3.create an title for this.
          title : "Increase price of fruits by 5 "
       }
    //    7. bind the function here
       this.increaseprice = this.increaseprice.bind(this)
     }
    //  8. define the function here
     increaseprice (){
        //  9. map the array to increase the price as below
      const ftuitList = this.state.Fruits.map((fruit)=>{
        //   10. you can increase the price by method A as blw or
        //   fruit.price= fruit.price+5 ------A
        // 12. now return the increased value Here with function
          return this.priceincrease(fruit)
        //   return fruit-----A
      })
      this.setState ({
        Fruits :   ftuitList
        // ftuitList-------A
    
      })
    } 
    // 11. or by create another function to increase the price as blw and must return this
    priceincrease (fruit){
        fruit.price = fruit.price+5
        return fruit
    }

  render() {
    return (
      <div>
          {/* 4. render the title to here*/}
        <h1>{this.state.title}</h1>
        {/* 6. create a button and add an even to increase the price with a function */}
        <button onClick={this.increaseprice}>Click to increase price </button>   
        {/* 5. render the object array from map to here */}
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
export default Objectlistcounter3
