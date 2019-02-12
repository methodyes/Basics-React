import React, { Component } from 'react'

 class Objectlist1 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        Students: [
            { name: 'Metho', age: 30 }, 
        { name: 'Huzni', age: 26 },
         { name: 'Arshad', age: 29 }
        ],
        title : "How to display an object  array "
       }
     }
     
  render() {
    return (
      <div>
       <h1>{this.state.title}</h1>
       <h3>
           {this.state.Students[0].name} is {this.state.Students[0].age} Years old
           <br/>
           {this.state.Students[1].name} is {this.state.Students[1].age} Years old
           <br/>
           {this.state.Students[2].name} is {this.state.Students[2].age} Years old
       </h3>
      </div>
    )
  }
}
export default Objectlist1