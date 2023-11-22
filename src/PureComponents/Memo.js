import React from 'react'

function Memo({count}) {
    console.log("functional component using memo")
    //memo is same as purecomponents in class
    //memo is used to obtain same functionality in functional components
  return (
    <div>Memo - {count}</div>
  )
}
//when we use react.memo(component name) - when ever the prop values changes then only ui rerenders same as pure components
export default React.memo(Memo);