import React, { Component } from "react";

class Arraylist4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    return (
      <div>
          <h1>If you want to display in many lines with a format</h1>
       {this.state.Names.map((name)=> 
        <h4>{name}</h4> )}
      </div>
    );
  }
}
export default Arraylist4;