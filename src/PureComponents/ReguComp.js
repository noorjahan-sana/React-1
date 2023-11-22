import React, { Component } from 'react'

export default class ReguComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  //normal component renders dom whether it gets prop values from parent though the values are same . as it is geting same
  //prop as 0 multiple time but it renders again and again. but in pure component when it gets different prop values
  //then only it re renders dom
  render() {
    console.log("regular component")
    return (
      <div>Regular Component {this.props.count}</div>
    )
  }
}
