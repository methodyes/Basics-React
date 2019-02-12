import React, { Component } from "react";

class Arraylist5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    return (
      <div>
        <h1>If you want to display as list </h1>
        <ul>
          {this.state.Names.map(name => (
            <h4>
              
              <li>{name}</li>
            </h4>
          ))}
        </ul>
      </div>
    );
  }
}
export default Arraylist5;
