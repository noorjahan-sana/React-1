import React, { Component } from 'react'

export default class Reference extends Component {
    constructor(props) {
      super(props)
    
     
      this.inputRef = React.createRef()
    }
    componentDidMount(){
      console.log(this.inputRef);
      //inputref points to the current input feild and .focus() will focus the cursour on the current input
      this.inputRef.current.focus()
    }
  render() {
    return (
      <div>Reference
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}
