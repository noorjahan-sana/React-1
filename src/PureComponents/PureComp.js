import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
     
    }
  }
  // pure components only renders when props changes. it (shallow comparison)compares shallow copy of props and state if the props are same as the 
  // previous copy then it doesnt re render.but where as normal component renders dom whether it gets same prop values also
  //as when it get same prop value as count:0 it only renders once
  render() {
    console.log("pure component")
    return (
      <div>Pure Component {this.props.count}</div>
    )
  }
}

export default PureComp