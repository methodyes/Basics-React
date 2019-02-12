import React, { Component } from "react";

class Basic8alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message : "You have subscribed our channel!"
    };
this.buttonclick=this.buttonclick.bind(this)
  }
  buttonclick (){
    
      alert ("Thanks !" +" " +  this.state.message)
    }
  
  render() {
    return (
      <div>
        <h1>How to use an alert</h1>
        <button onClick={this.buttonclick}>Click For Subscription</button>
      </div>
    );
  }
}

export default Basic8alert;
