import React, { Component } from "react";

class Arraylist1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.Names[0]}</h3> 
       <h3>{this.state.Names[1]}</h3> 
       <h3>{this.state.Names[2]}</h3> 
       <h3>{this.state.Names[3]}</h3> 
      </div>
    );
  }
}
export default Arraylist1;