import React, { Component } from 'react'
import CounterHoc from './CounterHoc'
class Counter extends Component {
    constructor(props) {
      super(props)
    }

  render() {
    return (
      <div>
       {/* getting state and increament method from hoc */}
        <button onClick={this.props.increament}>count : {this.props.count} and prop from Hoc is {this.props.Name}</button>
      </div>
    )
  }
}
// wrappring counter in couterhoc and sending the desired count value as a parameter
export default CounterHoc(Counter,5)