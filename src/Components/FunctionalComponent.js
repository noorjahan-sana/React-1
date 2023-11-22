import React from 'react'

export default function FunctionalComponent(props) {
  //destructuring of props
    // const {name,branch} = props;
  return (
    //with using jsx
    <div>
      <h1>Printing FunctionalComponent - {props.name}  {props.branch}</h1>
      {/* if props are sending any children it will print here */}
      {/* props are immutable means we cannot assign new value to it */}
      {props.children}
    </div>
    //with out using jsx we use React.createElement() 
  )
}
