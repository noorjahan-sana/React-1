import React, { Component } from 'react'

export default class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
      console.log("Construct of A called");
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps of class a is called");
        return null
    }
    componentDidMount(){
        console.log("componentDidMount of class a is called")
    }
  render() {
    console.log("render method of class a is called")
    return (
      <div>LifeCycleA</div>
    )
  }
}
