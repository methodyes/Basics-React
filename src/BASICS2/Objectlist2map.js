import React, { Component } from 'react'

class Objectlist2map extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Students: [
            { name: 'Metho', age: 30 }, 
        { name: 'Huzni', age: 26 },
         { name: 'Arshad', age: 29 }
        ],
      }
    }
    myArray () {
    const studentList = this.state.Students.map((stud)=>{
        return (
          
            <h3> {stud.name} is {stud.age} years old</h3>
        )
    })
    return studentList
    }
  render() {
    return (
      <div>
        <h1>This is how to display object array with a map</h1>
        {this.myArray ()}
        
      </div>
    )
  }
}
export default  Objectlist2map
