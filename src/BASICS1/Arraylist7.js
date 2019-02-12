import React, { Component } from "react";

class Arraylist7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }
  myArray (){
     return this.state.Names.map((name)=> {
          return <h4>{name}</h4>
      })
  }

  render() {
      
    return (
      <div>
        <h1>using a function to display the arrray BUT WITHOUT A CONST</h1>
       {this.myArray ()}
      </div>
    );
  }
}
export default Arraylist7;
