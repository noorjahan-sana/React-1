import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    //destructuring of props
    // const {name,branch} = this.props;
    return (
      // props are immutable means we cannot assign new value to it
      <div>
        <h1>Printing ClassComponent - {this.props.name} {this.props.branch}</h1></div>
    )
  }
}
