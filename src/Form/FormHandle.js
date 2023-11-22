import React, { Component } from 'react'

export default class FormHandle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         password:'',
      }
    }
    UserUpdate = (event)=>{
        //to change the state we use this.setstate
        this.setState({
            UserName:event.target.value,
        })
    }
    PasswordUpdate = (event)=>{
        this.setState({
            password:event.target.value,
        })
    }
    Submit = ()=>{
        alert(`${this.state.UserName} and ${this.state.password} submitted succefully`)
    }
  render() {
    return (
      <>
      <h1>form handler</h1>
      <div id='form'>
        User Name: <input type='text' value={this.state.UserName} onChange={this.UserUpdate}></input>
        PassWord : <input type='password' value={this.state.password} onChange={this.PasswordUpdate}></input>
        <button type='submit' onClick={this.Submit}>Submit</button>
      </div>
      </>
    )
  }
}
