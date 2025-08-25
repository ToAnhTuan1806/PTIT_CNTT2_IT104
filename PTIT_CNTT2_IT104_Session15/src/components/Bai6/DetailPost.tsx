import React, { Component } from 'react'

interface Post{
    id: number
    title: string
    content: string
    author: string
}

interface State{
    post: Post
}

export default class DetailPost extends Component<State> {
  
  render() {
     const {id, title, content, author } = this.props.post
    return (
      <div>
        <div style={{ borderBottom: "1px solid #ccc"}}>
        <p><b>ID: {id}</b></p>
        <p><b>Title :{title}</b></p>
        <p><b>Content: {content}</b></p>
        <p><b>Author: {author}</b></p>
      </div>
      </div>
    )
  }
}
