import React, { Component } from 'react'
import DetailPost from './DetailPost'

interface Post{
    id: number
    title: string
    content: string
    author: string
}

interface State{
    posts: Post[]
}

export default class ListPost extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            posts: [
                { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1", author: "Tác giả A" },
                { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2", author: "Tác giả B" },
                { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3", author: "Tác giả C" },
            ]
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
            <DetailPost key={post.id} post={post} />
        ))}
      </div>
    )
  }
}
