import React, { Component } from 'react'

// 1. create a class component
 class Basic13ifclasscom extends Component {
  render() {
      //2. create a let to say if there is no age, then should be display as N/A
      let age=this.props.age ? this.props.age : "N/A"
       // 3.Create an if which says- if there is a name, then display both name and age
      if (this.props.name){
        return (
            <div>
              <h3>
                  Name : {this.props.name} | Age : {age}
              </h3>
            </div>
          )
          //   4. if there is an age, then name should be N/A and display age as it is.
      } else if (this.props.age){
        return (
            <div>
              <h3>
                  Name : "N/A" | Age : {age}
              </h3>
            </div>
          )
           //  5.  if no age or name, then display as invalid entr
      } else {
        return (
            <div>
              <h3>
                  Invalid Entry
              </h3>
            </div>
          )
      }
    
  }
}
export default Basic13ifclasscom

// INSIDE APP .JS

    //  {/* <Basic13ifclasscom name="Metho" age="30"></Basic13ifclasscom>

