import React, { Component } from 'react';
import PureComp from './PureComp';
import ReguComp from './ReguComp';
import Memo from './Memo';
class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
    }
  }
  //sending same prop values as count:0 for every 2000msec as previous value is also count:0 in this.state
  componentDidMount(){
    setInterval(() => {
      this.setState({count:0})
    }, 2000);
  }
  //sending different prop values as count+1 for every 2000msec as previous value is also count:0 in this.state
  // componentDidMount(){
  //   setInterval(() => {
  //     this.setState({count:this.state.count+1})
  //   }, 2000);
  // }
  render() {
    console.log("***Parent component***")
    return (
      <div>Parent Component
       <ReguComp count={this.state.count}></ReguComp>
       <PureComp count={this.state.count}></PureComp>
       <Memo count={this.state.count}></Memo>
      </div>
    )
  }
}

export default ParentComp