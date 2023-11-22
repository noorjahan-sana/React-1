import React, { Component } from 'react'
import ChildClass from './ChildClass'
export default class ParentClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      greet : (parameter)=>{
        //parameter is the value got from child compenent
        alert("method from parent to child is paased"+" "+parameter)
      }
    }
  }
  
  render() {
    return (
      <div>
        {/* paased greet method as prop from parent to child component */}
        <ChildClass greet={this.state.greet}/>
      </div>
    )
  }
}
