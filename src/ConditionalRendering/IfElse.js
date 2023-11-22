import React, { Component } from 'react'

export default class IfElse extends Component {
    // rconst - short code for constructor
    constructor(props) {
        super(props)

        this.state = {
            login: false,
            //keep true and check
        }
    }
    render() {
        //     if(this.state.login){
        //         return <div>Logined</div>
        //     }
        //    else{
        //         return <div>not Logined</div>
        //     }
        // let message;
        // if (this.state.login) {
        //    message= <div>Logined</div>
        // }
        // else {
        //     message=<div>not Logined</div>
        // }
        // return message;

        //using terinary operator
       return this.state.login? <div>Logined</div> : <div>Not Logined</div>
    }
}
