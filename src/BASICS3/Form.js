import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Username : "",
       }
       this.handleUserNameChange=this.handleUserNameChange.bind(this)
     }
     handleUserNameChange(type){
 this.setState({
     Username : type.target.value
 })
     }
     
  render() {
    return (
      <div>
        <form>
            <label>Username</label>
            <input
            type="text"
            value={this.state.Username}
            onChange={this.handleUserNameChange}
            />
        </form>
      </div>
    )
  }
}

export default Form