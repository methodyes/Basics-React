import React from "react";

const Basic12letfunction = props => {
  let name = props.name ? props.name : " Is unknown"
  let age = props.age ? props.age : " Is unknown"
  return (
    <div>
      <h3>
        Name : {name} | Age : {age}
      </h3>
    </div>
  );
};

export default Basic12letfunction;

// this is how to use a let funcion in a funcitonal component