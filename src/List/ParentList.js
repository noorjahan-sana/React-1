import React from 'react'

export default function ParentList({person}) {
    //props names should be same if we send as perso  it should be person
    // console.log(arr)
    // let updated_names = arr.map(name => <p key={name}> {name}</p>)
  return (
    <div><h2>Parent List element:{person} </h2></div>
  )
}
