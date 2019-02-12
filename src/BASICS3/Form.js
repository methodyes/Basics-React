import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Username : "",
          Comments : "",
          Languages : "React",
       }
       this.handleUserNameChange=this.handleUserNameChange.bind(this)
       this.commentsChange=this.commentsChange.bind(this)
       this.changeSelect=this.changeSelect.bind(this)
     }
     handleUserNameChange(type){
 this.setState({
     Username : type.target.value
 })
     }
     commentsChange(type1){
         this.setState({
             Comments : type1.target.value
         })
     }
     changeSelect(type2){
         this.setState({
             Languages : type2.target.value
         })
     }
     
  render() {
    return (
      <div>
        <form>
            <div>
            <label>Username   : </label>
            <input
            type="text"
            value={this.state.Username}
            onChange={this.handleUserNameChange}
            />
            </div>
            <div>
                <label>Comments : </label>
                <input
                type="text"
                onChange={this.commentsChange}
                />
            </div>
            <div>
                <label>Languages : </label>
                <select value={this.state.Languages} onChange={this.changeSelect}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>

                </select>
            </div>
        </form>
      </div>
    )
  }
}

export default Form