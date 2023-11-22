import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }
  changeHandler= e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  SubmitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post("https://jsonplaceholder.typicode.com/posts").then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error)
    })
  }

  render() {
    const { userId, title, body } = this.state
    return (
      <div id='post'>
        <form onSubmit={this.SubmitHandler}>
          <input type='text' name='userId' value={userId} onChange={this.changeHandler}></input>
          <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
          <input type='text' name='body' value={body} onChange={this.changeHandler}></input>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
export default PostList