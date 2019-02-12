import React, { Component } from "react";

class Arraylist8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }
  myArray (){
    const myNameList= this.state.Names.map((name)=> {
          return <h4>{name}</h4>
      })
      return myNameList
  }

  render() {
      
    return (
      <div>
        <h1>using a function to display the arrray WITH A CONST</h1>
       {this.myArray ()}
      </div>
    );
  }
}
export default Arraylist8;
