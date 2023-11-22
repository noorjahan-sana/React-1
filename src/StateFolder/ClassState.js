import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

    };
    increamnet = () => {
        //if we update like this directly the updated value will not get rerendered in ui 

        // this.state.count = this.state.count+1;
        //to render the value every time when its updated we should use setstate method
        this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count))
    }
    // increamnet(){
    //     this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count));
    // }
    render() {
        return (
            <div><p>counter : {this.state.count}
            </p>
                {/* we should call any function or method any thing in class using this.method() */}
                {/* <button onClick={() => this.increamnet()}>Increament</button> */}
                {/* to use this.increment instead off wraping it in a arrow function the inreament function should me a arrow function */}
                {/* https://youtu.be/kVWpBtRjkCk?si=mws7wrgTc5BBM0hi -imp vd */}
                <button onClick={this.increamnet}>Increament</button>
            </div>
        )
    }
}
