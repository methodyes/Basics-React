import React, { Component } from "react";

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Student Details",
      Name: "",
      City: "",
      Language: "English"
    };
    this.changeHandler=this.changeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  changeHandler(e){
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  submitHandler(e){
      var {Name,City,Language}=this.state
  alert(`${Name} is from  ${City} and He speaks ${Language}`) /* make sure to use ` i/o ' */
  e.preventDefault() /* this is used to stop refresh the page*/
  this.setState({  /* below is used to show the empty inputs after alert is popped up */
    Name: "",
    City: "",
    Language: "English"
  })

  }

  render() {
    var { title, Name, City, Language } = this.state;

    return (
      <div>
        <h1> {title}</h1>
        <form onSubmit={this.submitHandler}> 
          <div>
            <label>Name</label>
            <input type="text" name="Name" value={Name} onChange={this.changeHandler}/>
          </div>
          <div>
            <label>City</label>
            <input type="text" name="City" value={City} onChange={this.changeHandler}/>
          </div>
          <div>
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Sinhala</option>
              <option>Tamil</option>
            </select>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form1;
