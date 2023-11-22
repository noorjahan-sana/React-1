import React, { Component } from 'react';

const CounterHoc = (WrappedComponent,CountVlaue) => {

    //we write functionality in hoc and use multiple times for different components 
    //we send the fucntionality as an props to the other components
    class CounterHoc extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
                increament:() => {
                    this.setState({ count: this.state.count + CountVlaue })
        
                }
            }
        }
       
        render() {
            return (
                //here we are sending state and increament method as props to the component which came in wrapped component
                <WrappedComponent Name='noor' count={this.state.count} increament={this.state.increament} />
            )
        }
    }
    return CounterHoc
}

export default CounterHoc