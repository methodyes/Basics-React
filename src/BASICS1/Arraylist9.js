import React, { Component } from "react";

class Arraylist9 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [{ name: "Metho", age: 20 }, { name: "Huzni", age: 25 }, { name: "Arshad", age: 24 }]
    };
  }
  myArray() {
    return this.state.students.map(list => {
      return (

      <h4>
        I am {list.name} and I am {list.age} years old.
      </h4>
      )
    });
    
  }

  render() {
    return (
      <div>
        <h1>using a function to display the arrray WITHOUT A CONST</h1>
        {this.myArray()}
        
      </div>
    );
  }
}
export default Arraylist9;
