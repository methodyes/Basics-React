import React from 'react'

const Basic4functionalprops = (props) => {
  return (
    <div>
      <h1>Learn about props</h1>
      {props.name} {props.age}
    </div>
  )
}

export default Basic4functionalprops

// In App.js 

 {/* <Basic4functionalprops name="Metho" age="30"></Basic4functionalprops> */}