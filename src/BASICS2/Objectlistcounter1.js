import React, { Component } from 'react'

class Objectlistcounter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Students: [
            { name: 'Metho', age: 30 }, 
        { name: 'Huzni', age: 26 },
         { name: 'Arshad', age: 29 }
        ],
        title : " How to increase the age by a button"
      }
    }
    increaseage=()=>{
     const studentList = this.state.Students.map((stud)=>{
         return this.agebyten (stud)
     })
     this.setState ({
        studentList
     })
    }
    agebyten (stud){
        stud.age = stud.age + 10
        return stud
    }

  render() {
    return (
      <div>
        <h1> {this.state.title}</h1>
        <button onClick={this.increaseage}>Increase age by 10</button>
        {this.state.Students.map((student)=>{
            return (
                <h4>
                    {student.name}--{student.age}
                </h4>
            )
        })}
        
      </div>
    )
  }
}
export default  Objectlistcounter1