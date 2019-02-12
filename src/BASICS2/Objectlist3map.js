import React, { Component } from 'react'

class Objectlist3map extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Students: [
            { name: 'Metho', age: 30 }, 
        { name: 'Huzni', age: 26 },
         { name: 'Arshad', age: 29 }
        ],
        title : "How to display object array with map"
      }
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        
           { this.state.Students.map((stud)=>{
                return (
                    <h3>
                        {stud.name} is {stud.age} Years old
                    </h3>
                )
           }
                )
            })
        
      </div>
    )
  }
}
export default  Objectlist3map