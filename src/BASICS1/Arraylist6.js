import React, { Component } from "react";

class Arraylist6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
      const nameList = this.state.Names.map((name)=>{
       return <h4>{name}</h4>
      })
    return (
      <div>
        <h1>using a const to display</h1>
        {nameList}
      </div>
    );
  }
}
export default Arraylist6;
