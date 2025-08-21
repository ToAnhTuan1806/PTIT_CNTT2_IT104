import React, { Component } from 'react'


interface Post{
    id:number
    title:string
    content: string
    author: string
}
interface Props{
    post: Post
}
export default class DetailPost extends Component<Props> {
  render() {
    const {id, title, content, author}=this.props.post
    return (
      <div style={{borderBottom: "1px solid #ccc" , marginBottom: "10px" }}>
        <p>Id: {id}</p>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
        <p>Author: {author}</p>
        </div>
    )
  }
}
