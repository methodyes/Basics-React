import React, { Component } from "react";

class Arraylist10 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [{ name: "Metho", age: 20 }, { name: "Huzni", age: 25 }, { name: "Arshad", age: 24 }]
    };
  }
  myArray() {
    const myList= this.state.students.map(list => {
      return (

      <h4>
        I am {list.name} and I am {list.age} years old.
      </h4>
      )
    });
    return myList;
  }

  render() {
    return (
      <div>
        <h1>using a function to display the arrray With A CONST</h1>
        {this.myArray()}
        
      </div>
    );
  }
}
export default Arraylist10;
