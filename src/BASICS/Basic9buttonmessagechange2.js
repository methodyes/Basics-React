// this is the first binding method

import React, { Component } from "react";

class Basic9buttonmessagechange2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Please change this message"
    };
  }
  changemessage  ()  {
      this.setState({
          message : " The message has been changed"
      })
      
  }
  render() {
    return (
      <div>
        <h1> How to change the message with a button</h1>
        <h3>{this.state.message}</h3>
        <button onClick={ this.changemessage.bind(this)}>Click to change the message</button>
      </div>
    );
  }
}
export default Basic9buttonmessagechange2;