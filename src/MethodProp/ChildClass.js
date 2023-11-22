import React, { Component } from 'react'

export default class ChildClass extends Component {
  constructor(props) {
    super(props)
  //props wiil receive greet method we can access it like this - this.props.greet
    this.state = {
       
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.props.greet("child class parameter")}>Child Class</button>
      </div>
    )
  }
}
