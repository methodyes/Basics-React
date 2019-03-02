import React from 'react'

// 1. create a funcitonal component
const Basic13iffunctioncom = (props) => {
    //2. create a let to say if there is no age, then should be display as N/A
    let age=props.age ? props.age : " N/A"
    // 3.Create an if which says- if there is a name, then display both name and age
    if (props.name)   {
  return (
    <div>
      <h5>
Name : {props.name} | Age : {age}
      </h5>
    </div> 
  )
//   4. if there is an age, then name should be N/A and display age as it is.
    }  else if (props.age)  {
        return (
            <div>
              <h5>
              Name : "N/A "| Age : {age}
              </h5>
            </div>
          )
        //  5.  if no age or name, then display as invalid entry
    }else   {
        return (
            <div>
              <h5>
             Invalid Entry
              </h5>
            </div>
          )
    }


}

export default Basic13iffunctioncom

// INSIDE APP .JS

   {/* <Basic13iffunctioncom name="Metho" age="30"></Basic13iffunctioncom>
      <Basic13iffunctioncom name="" age="26"></Basic13iffunctioncom>
    <Basic13iffunctioncom name="Ammar" age=""></Basic13iffunctioncom> 
    <Basic13iffunctioncom name="" age=""></Basic13iffunctioncom>  */}
