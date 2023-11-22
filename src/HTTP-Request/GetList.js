import React, { Component } from 'react';
import axios from 'axios'
class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
      }
    }
    componentDidMount(){
        //axios will get data from the api and store in response 
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            console.log(response);
            this.setState({posts:response.data})
        }).catch(error=>{
            console.log("error")
        })
    }
  render() {
    const {posts}=this.state
    return (
      <div>PostList
        {
            //each element which render through map should have a unique key
          posts.map(post=><h2 key={post.id}>{post.title}</h2>)
        }
      </div>
    )
  }
}

export default GetList