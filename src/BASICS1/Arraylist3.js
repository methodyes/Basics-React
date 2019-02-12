import React, { Component } from "react";

class Arraylist3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    return (
      <div>
          <h1>If you want to display in one line without any format</h1>
       {this.state.Names.map((name)=> name)}
      </div>
    );
  }
}
export default Arraylist3;