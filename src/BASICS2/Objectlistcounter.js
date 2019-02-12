import React, { Component } from 'react'

class Objectlistcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Students: [
            { name: 'Metho', age: 30 }, 
        { name: 'Huzni', age: 26 },
         { name: 'Arshad', age: 29 }
        ],
        title : " Students details"
      }
      
    }
    increaseage = () => {
      const mystudentlist = this.state.Students.map((stud)=>{
        stud.age=stud.age+10
        return stud
      })
      this.setState ({
        mystudentlist
      })
     }
    
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.increaseage}>Click here to reduce the age</button>
        
            {this.state.Students.map((data)=>{
             return (
              <h4>
                 {data.name}--{data.age}
              </h4>
          )
              
            })}
      
      </div>
    )
  }
}
export default  Objectlistcounter